import { UfeCommand } from '../../models/UfeCommand';
import { WebResource } from '../web-resource-locator/models/web-resource';
import { WrlApplicationInstanceWithVersions } from '../web-resource-locator/models/wrl-application-instance';
import { OpenWebResourceCommandArgument, WrlCommandArgument } from '../web-resource-locator/models/wrl-command-argument';
export declare function isUfeCommand(command: UfeCommand): command is UfeCommand;
export declare function isWrlCommandArgument(item: WrlCommandArgument): item is WrlCommandArgument;
export declare function isWebResouce(item: WebResource): item is WebResource;
export declare function isOpenWebResourceCommandArgument(item: OpenWebResourceCommandArgument): item is OpenWebResourceCommandArgument;
export declare function isWrlApplicationInstanceWithVersions(item: WrlApplicationInstanceWithVersions): item is WrlApplicationInstanceWithVersions;
