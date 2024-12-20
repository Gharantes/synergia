export * from './accountResource.service';
import { AccountResourceService } from './accountResource.service';
export * from './eventResource.service';
import { EventResourceService } from './eventResource.service';
export * from './exportToExcelResource.service';
import { ExportToExcelResourceService } from './exportToExcelResource.service';
export * from './importManagerResource.service';
import { ImportManagerResourceService } from './importManagerResource.service';
export * from './loginPageResource.service';
import { LoginPageResourceService } from './loginPageResource.service';
export * from './projectResource.service';
import { ProjectResourceService } from './projectResource.service';
export * from './templateManagerResource.service';
import { TemplateManagerResourceService } from './templateManagerResource.service';
export * from './tenantResource.service';
import { TenantResourceService } from './tenantResource.service';
export const APIS = [AccountResourceService, EventResourceService, ExportToExcelResourceService, ImportManagerResourceService, LoginPageResourceService, ProjectResourceService, TemplateManagerResourceService, TenantResourceService];
