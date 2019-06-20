/* 
 Setup: Enter your storage account name and shared key in main()
*/

import { BlobServiceClient, newPipeline, SharedKeyCredential } from "../../src"; // Change to "@azure/storage-blob" in your package

async function main() {
  // Enter your storage account name and shared key
  const account = "";
  const accountKey = "";

  // Use SharedKeyCredential with storage account and account key
  const sharedKeyCredential = new SharedKeyCredential(account, accountKey);

  // Use sharedKeyCredential, tokenCredential or anonymousCredential to create a pipeline
  const pipeline = newPipeline(sharedKeyCredential);

  // List containers
  const blobServiceClient = new BlobServiceClient(
    // When using AnonymousCredential, following url should include a valid SAS or support public access
    `https://${account}.blob.core.windows.net`,
    pipeline
  );

  // 1. List Containers
  let i = 1;
  let iter = await blobServiceClient.listContainers();
  for await (const container of iter) {
    console.log(`Container ${i++}: ${container.name}`);
  }

  // 2. Same as the previous example
  i = 1;
  for await (const container of blobServiceClient.listContainers()) {
    console.log(`Container ${i++}: ${container.name}`);
  }

  // 3. Generator syntax .next()
  i = 1;
  iter = blobServiceClient.listContainers();
  let containerItem = await iter.next();
  while (!containerItem.done) {
    console.log(`Container ${i++}: ${containerItem.value.name}`);
    containerItem = await iter.next();
  }

  ////////////////////////////////////////////////////////
  ///////////////  Examples for .byPage()  ///////////////
  ////////////////////////////////////////////////////////

  // 4. list containers by page
  i = 1;
  for await (const response of blobServiceClient.listContainers().byPage()) {
    if (response.containerItems) {
      for (const container of response.containerItems) {
        console.log(`Container ${i++}: ${container.name}`);
      }
    }
  }

  // 5. Same as the previous example - passing maxPageSize in the page settings
  i = 1;
  for await (const response of blobServiceClient.listContainers().byPage({ maxPageSize: 20 })) {
    if (response.containerItems) {
      for (const container of response.containerItems) {
        console.log(`Container ${i++}: ${container.name}`);
      }
    }
  }

  // 6. Generator syntax .next()
  i = 1;
  let iterator = blobServiceClient.listContainers().byPage({ maxPageSize: 20 });
  let response = (await iterator.next()).value;
  do {
    if (response.containerItems) {
      for (const container of response.containerItems) {
        console.log(`Container ${i++}: ${container.name}`);
      }
    }
    response = (await iterator.next()).value;
  } while (response);

  // 7. Passing marker as an argument (similar to the previous example)
  i = 1;
  iterator = blobServiceClient.listContainers().byPage({ maxPageSize: 2 });
  response = (await iterator.next()).value;
  // Prints 2 container names
  if (response.containerItems) {
    for (const container of response.containerItems) {
      console.log(`Container ${i++}: ${container.name}`);
    }
  }
  // Gets next marker
  let marker = response.nextMarker;
  // Passing next marker as continuationToken
  iterator = blobServiceClient
    .listContainers()
    .byPage({ continuationToken: marker, maxPageSize: 10 });
  response = (await iterator.next()).value;
  // Prints 10 container names
  if (response.containerItems) {
    for (const container of response.containerItems) {
      console.log(`Container ${i++}: ${container.name}`);
    }
  }
}

// An async method returns a Promise object, which is compatible with then().catch() coding style.
main()
  .then(() => {
    console.log("Successfully executed the sample.");
  })
  .catch((err) => {
    console.log(err.message);
  });