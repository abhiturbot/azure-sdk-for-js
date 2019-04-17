/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/workflowTriggersMappers";
import * as Parameters from "../models/parameters";
import { LogicManagementClientContext } from "../logicManagementClientContext";

/** Class representing a WorkflowTriggers. */
export class WorkflowTriggers {
  private readonly client: LogicManagementClientContext;

  /**
   * Create a WorkflowTriggers.
   * @param {LogicManagementClientContext} client Reference to the service client.
   */
  constructor(client: LogicManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a list of workflow triggers.
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkflowTriggersListResponse>
   */
  list(resourceGroupName: string, workflowName: string, options?: Models.WorkflowTriggersListOptionalParams): Promise<Models.WorkflowTriggersListResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param callback The callback
   */
  list(resourceGroupName: string, workflowName: string, callback: msRest.ServiceCallback<Models.WorkflowTriggerListResult>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, workflowName: string, options: Models.WorkflowTriggersListOptionalParams, callback: msRest.ServiceCallback<Models.WorkflowTriggerListResult>): void;
  list(resourceGroupName: string, workflowName: string, options?: Models.WorkflowTriggersListOptionalParams | msRest.ServiceCallback<Models.WorkflowTriggerListResult>, callback?: msRest.ServiceCallback<Models.WorkflowTriggerListResult>): Promise<Models.WorkflowTriggersListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workflowName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.WorkflowTriggersListResponse>;
  }

  /**
   * Gets a workflow trigger.
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param triggerName The workflow trigger name.
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkflowTriggersGetResponse>
   */
  get(resourceGroupName: string, workflowName: string, triggerName: string, options?: msRest.RequestOptionsBase): Promise<Models.WorkflowTriggersGetResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param triggerName The workflow trigger name.
   * @param callback The callback
   */
  get(resourceGroupName: string, workflowName: string, triggerName: string, callback: msRest.ServiceCallback<Models.WorkflowTrigger>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param triggerName The workflow trigger name.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, workflowName: string, triggerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WorkflowTrigger>): void;
  get(resourceGroupName: string, workflowName: string, triggerName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.WorkflowTrigger>, callback?: msRest.ServiceCallback<Models.WorkflowTrigger>): Promise<Models.WorkflowTriggersGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workflowName,
        triggerName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.WorkflowTriggersGetResponse>;
  }

  /**
   * Resets a workflow trigger.
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param triggerName The workflow trigger name.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  reset(resourceGroupName: string, workflowName: string, triggerName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param triggerName The workflow trigger name.
   * @param callback The callback
   */
  reset(resourceGroupName: string, workflowName: string, triggerName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param triggerName The workflow trigger name.
   * @param options The optional parameters
   * @param callback The callback
   */
  reset(resourceGroupName: string, workflowName: string, triggerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  reset(resourceGroupName: string, workflowName: string, triggerName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workflowName,
        triggerName,
        options
      },
      resetOperationSpec,
      callback);
  }

  /**
   * Runs a workflow trigger.
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param triggerName The workflow trigger name.
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkflowTriggersRunResponse>
   */
  run(resourceGroupName: string, workflowName: string, triggerName: string, options?: msRest.RequestOptionsBase): Promise<Models.WorkflowTriggersRunResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param triggerName The workflow trigger name.
   * @param callback The callback
   */
  run(resourceGroupName: string, workflowName: string, triggerName: string, callback: msRest.ServiceCallback<any>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param triggerName The workflow trigger name.
   * @param options The optional parameters
   * @param callback The callback
   */
  run(resourceGroupName: string, workflowName: string, triggerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<any>): void;
  run(resourceGroupName: string, workflowName: string, triggerName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<any>, callback?: msRest.ServiceCallback<any>): Promise<Models.WorkflowTriggersRunResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workflowName,
        triggerName,
        options
      },
      runOperationSpec,
      callback) as Promise<Models.WorkflowTriggersRunResponse>;
  }

  /**
   * Get the trigger schema as JSON.
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param triggerName The workflow trigger name.
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkflowTriggersGetSchemaJsonResponse>
   */
  getSchemaJson(resourceGroupName: string, workflowName: string, triggerName: string, options?: msRest.RequestOptionsBase): Promise<Models.WorkflowTriggersGetSchemaJsonResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param triggerName The workflow trigger name.
   * @param callback The callback
   */
  getSchemaJson(resourceGroupName: string, workflowName: string, triggerName: string, callback: msRest.ServiceCallback<Models.JsonSchema>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param triggerName The workflow trigger name.
   * @param options The optional parameters
   * @param callback The callback
   */
  getSchemaJson(resourceGroupName: string, workflowName: string, triggerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.JsonSchema>): void;
  getSchemaJson(resourceGroupName: string, workflowName: string, triggerName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.JsonSchema>, callback?: msRest.ServiceCallback<Models.JsonSchema>): Promise<Models.WorkflowTriggersGetSchemaJsonResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workflowName,
        triggerName,
        options
      },
      getSchemaJsonOperationSpec,
      callback) as Promise<Models.WorkflowTriggersGetSchemaJsonResponse>;
  }

  /**
   * Sets the state of a workflow trigger.
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param triggerName The workflow trigger name.
   * @param setStateParameter The workflow trigger state.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  setState(resourceGroupName: string, workflowName: string, triggerName: string, setStateParameter: Models.SetTriggerStateActionDefinition, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param triggerName The workflow trigger name.
   * @param setStateParameter The workflow trigger state.
   * @param callback The callback
   */
  setState(resourceGroupName: string, workflowName: string, triggerName: string, setStateParameter: Models.SetTriggerStateActionDefinition, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param triggerName The workflow trigger name.
   * @param setStateParameter The workflow trigger state.
   * @param options The optional parameters
   * @param callback The callback
   */
  setState(resourceGroupName: string, workflowName: string, triggerName: string, setStateParameter: Models.SetTriggerStateActionDefinition, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  setState(resourceGroupName: string, workflowName: string, triggerName: string, setStateParameter: Models.SetTriggerStateActionDefinition, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workflowName,
        triggerName,
        setStateParameter,
        options
      },
      setStateOperationSpec,
      callback);
  }

  /**
   * Get the callback URL for a workflow trigger.
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param triggerName The workflow trigger name.
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkflowTriggersListCallbackUrlResponse>
   */
  listCallbackUrl(resourceGroupName: string, workflowName: string, triggerName: string, options?: msRest.RequestOptionsBase): Promise<Models.WorkflowTriggersListCallbackUrlResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param triggerName The workflow trigger name.
   * @param callback The callback
   */
  listCallbackUrl(resourceGroupName: string, workflowName: string, triggerName: string, callback: msRest.ServiceCallback<Models.WorkflowTriggerCallbackUrl>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param triggerName The workflow trigger name.
   * @param options The optional parameters
   * @param callback The callback
   */
  listCallbackUrl(resourceGroupName: string, workflowName: string, triggerName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WorkflowTriggerCallbackUrl>): void;
  listCallbackUrl(resourceGroupName: string, workflowName: string, triggerName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.WorkflowTriggerCallbackUrl>, callback?: msRest.ServiceCallback<Models.WorkflowTriggerCallbackUrl>): Promise<Models.WorkflowTriggersListCallbackUrlResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workflowName,
        triggerName,
        options
      },
      listCallbackUrlOperationSpec,
      callback) as Promise<Models.WorkflowTriggersListCallbackUrlResponse>;
  }

  /**
   * Gets a list of workflow triggers.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkflowTriggersListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.WorkflowTriggersListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.WorkflowTriggerListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WorkflowTriggerListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.WorkflowTriggerListResult>, callback?: msRest.ServiceCallback<Models.WorkflowTriggerListResult>): Promise<Models.WorkflowTriggersListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.WorkflowTriggersListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/triggers",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workflowName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.top,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.WorkflowTriggerListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/triggers/{triggerName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workflowName,
    Parameters.triggerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.WorkflowTrigger
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const resetOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/triggers/{triggerName}/reset",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workflowName,
    Parameters.triggerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const runOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/triggers/{triggerName}/run",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workflowName,
    Parameters.triggerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    default: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Object"
        }
      }
    }
  },
  serializer
};

const getSchemaJsonOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/triggers/{triggerName}/schemas/json",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workflowName,
    Parameters.triggerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.JsonSchema
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const setStateOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/triggers/{triggerName}/setState",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workflowName,
    Parameters.triggerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "setStateParameter",
    mapper: {
      ...Mappers.SetTriggerStateActionDefinition,
      required: true
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listCallbackUrlOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/triggers/{triggerName}/listCallbackUrl",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workflowName,
    Parameters.triggerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.WorkflowTriggerCallbackUrl
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.WorkflowTriggerListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};