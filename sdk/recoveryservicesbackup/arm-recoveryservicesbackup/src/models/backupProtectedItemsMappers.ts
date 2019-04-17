/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

export {
  discriminators,
  ProtectedItemResourceList,
  ResourceList,
  ProtectedItemResource,
  Resource,
  BaseResource,
  ProtectedItem,
  CloudError,
  AzureFileshareProtectedItem,
  AzureFileshareProtectedItemExtendedInfo,
  AzureIaaSVMProtectedItem,
  AzureIaaSVMHealthDetails,
  AzureIaaSVMProtectedItemExtendedInfo,
  AzureSqlProtectedItem,
  AzureSqlProtectedItemExtendedInfo,
  AzureVmWorkloadProtectedItem,
  ErrorDetail,
  AzureVmWorkloadProtectedItemExtendedInfo,
  AzureVmWorkloadSAPHanaDatabaseProtectedItem,
  AzureVmWorkloadSQLDatabaseProtectedItem,
  DPMProtectedItem,
  DPMProtectedItemExtendedInfo,
  GenericProtectedItem,
  JobResource,
  Job,
  JobResourceList,
  MabFileFolderProtectedItem,
  MabFileFolderProtectedItemExtendedInfo,
  MabJob,
  MabErrorInfo,
  MabJobExtendedInfo,
  MabJobTaskDetails,
  ProtectionIntentResource,
  ProtectionIntent,
  ProtectionIntentResourceList,
  ProtectionPolicyResource,
  ProtectionPolicy,
  ProtectionPolicyResourceList,
  BackupEngineBaseResource,
  BackupEngineBase,
  BackupEngineExtendedInfo,
  BackupEngineBaseResourceList,
  BackupRequestResource,
  BackupRequest,
  BackupResourceConfigResource,
  BackupResourceConfig,
  BackupResourceVaultConfigResource,
  BackupResourceVaultConfig,
  DpmBackupEngine,
  IaasVMBackupRequest,
  ILRRequestResource,
  ILRRequest,
  ProtectableContainerResource,
  ProtectableContainer,
  ProtectableContainerResourceList,
  ProtectionContainerResource,
  ProtectionContainer,
  ProtectionContainerResourceList,
  RecoveryPointResource,
  RecoveryPoint,
  RecoveryPointResourceList,
  RestoreRequestResource,
  RestoreRequest,
  WorkloadItemResource,
  WorkloadItem,
  WorkloadItemResourceList,
  WorkloadProtectableItemResource,
  WorkloadProtectableItem,
  WorkloadProtectableItemResourceList,
  AzureFileShareProtectionPolicy,
  SchedulePolicy,
  RetentionPolicy,
  AzureFileShareRestoreRequest,
  RestoreFileSpecs,
  TargetAFSRestoreInfo,
  AzureIaaSClassicComputeVMProtectedItem,
  AzureIaaSComputeVMProtectedItem,
  AzureIaaSVMJob,
  AzureIaaSVMErrorInfo,
  AzureIaaSVMJobExtendedInfo,
  AzureIaaSVMJobTaskDetails,
  AzureIaaSVMProtectionPolicy,
  AzureRecoveryServiceVaultProtectionIntent,
  AzureResourceProtectionIntent,
  AzureSqlProtectionPolicy,
  AzureStorageJob,
  AzureStorageErrorInfo,
  AzureStorageJobExtendedInfo,
  AzureStorageJobTaskDetails,
  AzureVmWorkloadProtectionPolicy,
  Settings,
  SubProtectionPolicy,
  AzureWorkloadAutoProtectionIntent,
  AzureWorkloadJob,
  AzureWorkloadErrorInfo,
  AzureWorkloadJobExtendedInfo,
  AzureWorkloadJobTaskDetails,
  AzureWorkloadRestoreRequest,
  AzureWorkloadSAPHanaRestoreRequest,
  TargetRestoreInfo,
  AzureWorkloadSQLAutoProtectionIntent,
  AzureWorkloadSQLRestoreRequest,
  SQLDataDirectoryMapping,
  DpmJob,
  DpmErrorInfo,
  DpmJobExtendedInfo,
  DpmJobTaskDetails,
  GenericProtectionPolicy,
  IaasVMRestoreRequest,
  EncryptionDetails,
  LogSchedulePolicy,
  LongTermRetentionPolicy,
  DailyRetentionSchedule,
  RetentionDuration,
  WeeklyRetentionSchedule,
  MonthlyRetentionSchedule,
  DailyRetentionFormat,
  Day,
  WeeklyRetentionFormat,
  YearlyRetentionSchedule,
  LongTermSchedulePolicy,
  MabProtectionPolicy,
  SimpleRetentionPolicy,
  SimpleSchedulePolicy,
  AzureBackupServerContainer,
  DPMContainerExtendedInfo,
  AzureBackupServerEngine,
  AzureFileShareBackupRequest,
  AzureFileShareProtectableItem,
  AzureFileShareRecoveryPoint,
  AzureSqlContainer,
  AzureStorageContainer,
  AzureStorageProtectableContainer,
  AzureVMAppContainerProtectableContainer,
  AzureVmWorkloadItem,
  AzureVmWorkloadProtectableItem,
  PreBackupValidation,
  AzureVmWorkloadSAPHanaDatabaseProtectableItem,
  AzureVmWorkloadSAPHanaDatabaseWorkloadItem,
  AzureVmWorkloadSAPHanaSystemProtectableItem,
  AzureVmWorkloadSAPHanaSystemWorkloadItem,
  AzureVmWorkloadSQLAvailabilityGroupProtectableItem,
  AzureVmWorkloadSQLDatabaseProtectableItem,
  AzureVmWorkloadSQLDatabaseWorkloadItem,
  AzureVmWorkloadSQLInstanceProtectableItem,
  AzureVmWorkloadSQLInstanceWorkloadItem,
  SQLDataDirectory,
  AzureWorkloadBackupRequest,
  AzureWorkloadContainer,
  AzureWorkloadContainerExtendedInfo,
  InquiryInfo,
  WorkloadInquiryDetails,
  InquiryValidation,
  DistributedNodesInfo,
  AzureWorkloadRecoveryPoint,
  AzureWorkloadSAPHanaRecoveryPoint,
  AzureWorkloadSQLRecoveryPoint,
  AzureWorkloadSQLRecoveryPointExtendedInfo,
  DpmContainer,
  GenericContainer,
  GenericContainerExtendedInfo,
  ContainerIdentityInfo,
  GenericRecoveryPoint,
  IaaSVMContainer,
  IaasVMILRRegistrationRequest,
  IaaSVMProtectableItem,
  IaasVMRecoveryPoint,
  KeyAndSecretDetails,
  KEKDetails,
  BEKDetails,
  RecoveryPointTierInformation,
  MabContainer,
  MabContainerExtendedInfo,
  MABContainerHealthDetails,
  AzureWorkloadSAPHanaPointInTimeRestoreRequest,
  AzureWorkloadSQLPointInTimeRestoreRequest,
  AzureIaaSClassicComputeVMContainer,
  AzureIaaSClassicComputeVMProtectableItem,
  AzureIaaSComputeVMContainer,
  AzureIaaSComputeVMProtectableItem,
  AzureSQLAGWorkloadContainerProtectionContainer,
  AzureVMAppContainerProtectionContainer,
  AzureWorkloadSAPHanaPointInTimeRecoveryPoint,
  PointInTimeRange,
  AzureWorkloadSQLPointInTimeRecoveryPoint
} from "../models/mappers";
