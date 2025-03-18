# IfxUfe

## Wiki

- <a href="https://goto.infineon.com/wmf" target="_blank">here you can find the Web Micro Frontend Wiki</a>
- <a href="http://goto.infineon.com/ifxufestorybook" target="_blank">here you can find the Web Micro Frontend Material Theme Storybook</a>

## Code examples on gitlab.intra.infineon.com

**!! attention you have to call it twice if you are not yet login into gitlab.intra.infineon.com !!**

- <a href="<https://gitlab.intra.infineon.com/ifx-fi-msi/ifx-ufe/demo-apps>" target="_blank"><https://gitlab.intra.infineon.com/ifx-fi-msi/ifx-ufe/demo-apps></a>

## Installing the Library

Install the library:
`npm install ifx-ufe`

You must have credentials set up in your npmrc file to use the Infineon Artifactory as your npm proxy as the ifx-ufe library is not available on the public npm registry. The ifx-ufe is hosted on the following Artifactory registry:

```
https://artifactory.intra.infineon.com/artifactory/api/npm/npm-webcommunity-vir/"
```

- create a .npmrc file

```bash
echo "registry=https://artifactory.intra.infineon.com/artifactory/api/npm/npm-webcommunity-vir/" > .npmrc
```

Import the framework stylesheet into styles.scss:

```typescript
@use "ifx-ufe/ufeIndex.scss";
```

The framework stylesheet has styles essential to the function of the framework and must be included in your global stylesheet.

#### !! IMPORTANT NOTE

The Infineon microFrontEnd framework (ifx-ufe) requires Angular ^19.0.0 and Angular Material ^19.0.0 as peer dependencies. You must install both these libraries before attempting to use the ifx-ufe library.

# Quick Start Guide

The Micro Frontend framework was created to relieve development teams of the tasks required to make their applications work as Micro Frontends (uFE for the rest of this document), allowing them to focus on building their front end as a typical Angular project. There are five essential pieces of the ifx-ufe framework you will need to incorporate into your project:

- the `ufeMessageListener` directive
- the `DataCommunicationService`
- the `ifx-ufe-header` component
- the `ifx-ufe-auth`component
- the `ShellCommunicatorService`
- the `UfeDialogWindowService`

If your app requires authentication through iSecure (as most uFE will), you will need to incorporate two additional elements of the ifx-ufe framework:

- the `Login` component
- a profileConfig.json file with corresponding credentials.json and kerberos.json files

### The ufeMessageListener directive

The `ufeMessageListener` directive: Once added to your imports, add the `ufeMessageListner` directive to the root element of your application:

```angular2html
<div ufeMessageListener [ufeName]="'testApp'" [baseRoute]="'home'">
  <h1>My Super Awesome Micro Frontend</h1>
  <app-awesome-component></app-awesome-component>
  ...
</div>
```

It is important to note that the component the `ufeMessageListener` is attached to *must not* be a routed component; that is it may contain a `<router-outlet>` tag, but should not itself be rendered within another router outlet. Also, the `ufeMessageListener` *must* be attached to the topmost tag of the top level component of the application.

The `ufeMessageListener` receives messages from the Shell if your uFE is running in the Shell (the most common situation), or the native application if your uFE is running embedded in a native application such as FabCockpit. When your uFE runs in stand-alone mode (i.e. neither in the Shell dashboard nor embedded into a native app) the `ufeMessageListener` is still involved in the abstracting of dialog windows, pop-up messages (discussed later), and interacting with peer uFEs, so it must always be included in the root element of your uFE.

The `ufeMessageListener` requires two inputs:

- `ufeName` A string specifying the name of this uFE as registered with the Front-End Discovery Service
- `baseRoute` This is the route the `Login` component should reroute a users' browser to once the user is authenticated assuming no other route was previously specified. The `baseRoute` should be a "home" component that allows the user to begin using the app with no additional context needed.

### The DataCommunicationService

The `DataCommunicationService` is the primary channel by which the ifx-ufe framework communicates with client uFE code. This service provides a number of methods that allow the client uFE to get essential information from the framework including UfeCommands sent from the Shell or a peer uFE. Handlers will need to be implemented to respond to these UfeCommands. See the `DataCommunicationService` section in the Detailed Information section below for full documentation of the API the `DataCommunicationService` provides. See the `UfeCommand` class section in the Detailed Information section below for full information on what messages your uFE will need to respond to and what format to expect them in.

### The ifx-ufe-header component

The `ifx-ufe-header` component provides a standard application header and controls when your uFE is running stand-alone. The `ifx-ufe-header` tag should be added to your application immediately after the root element. The `ifx-ufe-header` will detect what environment your application is running in, and provide the header if needed. The `ifx-ufe-header` takes one input, "title", a string which will be displayed as the title in the header bar.

```angular2html
<div ufeMessageListener [ufeName]="'testApp'" [baseRoute]="'home'" >
  <ifx-ufe-header [title]="'My First uFE'" [hideJwtCounter] = "false">
    <ng-container toolbarLeftLogoContainer>
       <!-- here you can add your own content -->
    </ng-container>

    <ng-container toolbarRightTitleContainer>
       <!-- here you can add your own content -->
    </ng-container>

    <ng-container toolbarLeftAuthContainer>
       <!-- here you can add your own content -->
    </ng-container>

  </ifx-ufe-header>
  <h1>My Super Awesome Micro Frontend</h1>
  <app-awesome-component></app-awesome-component>
  ...
</div>
```

- hideJwtCounter
  - true ... hide JwtCounter component
  - false (default) ... show JwtCounter component
- **Option to add additional content to ifx-ufe-auth component**

  ```html
  <ifx-ufe-header [title]="title" (logout)="onLogout()" [hideJwtCounter]="false"    [hideAuthComponent]="true">

    <ng-container authComponent>
      <ifx-ufe-auth
      (logout)="onLogout()">
        <div class="version-container">
          <span>test version</span>
        </div>
     </ifx-ufe-auth>
    </ng-container>
  </ifx-ufe-header>
  ```

### The ifx-ufe-auth component

The `ifx-ufe-auth` component provides only the standard user icon with the dropdown menu for creating own menu bar. The `ifx-ufe-auth` tag can add to your menu bar.

```angular2html
   <div ufeMessageListener [ufeName]="'testApp'" [baseRoute]="'home'" >

    <!- if you want also use silent refresh ufe feature you have to add ifx-ufe-auth-refresh component -->
    <div class="invisible">
      <ifx-ufe-auth-refresh></ifx-ufe-auth-refresh>
    </div>

     <ifx-ufe-auth
        [externalLinks]="externalLinks"
        [helpLinks]="helpLinks"
        [hideJwtCounter] = "true">
     </ifx-ufe-auth>
  </div>
```

  - hideJwtCounter
    - true ... hide JwtCounter component
    - false (default) ... show JwtCounter component

### The ShellCommunicatorService

The `ShellCommunicatorService` allows your uFE to communicate with the Shell and other uFE to create interactions that make the Shell dashboard feel like a single application to the user. Once imported the `ShellCommunicatorService` can be used from within the .ts file of any component in your app. There are three types of methods within the `ShellCommunicatorService` you will use most commonly:
<br />

- notification methods (see below)
- `openUfe(ufe: string)`
- `sendPeerMessage(ufe: string, message: any)`

<br />

Four separate notification methods are provided by the ShellCommunicatorService, these methods take identical parameters differing only in the color scheme of the displayed notification:

- `sendInfoNotification(title: string, message?: string, details?: string[])` Creates a notification using the current standard color scheme.
- `sendErrorNotification(title: string, message?: string, details?: string[])` Creates a notification with a red background.
- `sendSuccessNotification(title: string, message?: string, details?: string[])` Creates a notification with a green background.
- `sendWarningNotification(title: string, message?: string, details?: string[])` Creates a notification with a yellow background.

Note that all notifications will disappear after 5 seconds except Error notifications which must be manually dismissed by the user.

`openUfe(ufe: string)` Is used to request the Shell open another uFE. The string passed in the ufe parameter must be the registered name of another Micro Frontend. You can find more details on registered names in the section on the `ShellCommunicatorService` in the Detailed Information area below. If your uFE is running stand-alone, the framework will open the requested uFE in another tab within the user's browser. The framework will connect these two tabs allowing them to communicate with one another using the `sendPeerMessage` method discussed below.

`sendPeerMessage(ufe: string, message: any)` Is used to pass a message to another uFE. The ufe parameter is the registered name of another uFE, and any data to be passed to the recipient can be included in the message parameter. If the intended recipient uFE of the message is not currently open, `sendPeerMessage` will first open the target uFE and wait for the content to load before sending the message.

### The UfeDialogWindowService

The `UfeDialogWindowService` should be injected into the constructor of any component that will need to open dialog windows. The `UfeDialogWindowService` handles the task of creating dialog windows that are appropriate to the environment your uFE is running in. Your uFE might run an any of three possible environments (Shell, Embedded, Stand-alone), and each of these environments require different handling of how dialog windows are created. In the Shell, the dialog window must be opened within the Shell app as uFE run within an iframe and cannot create content outside the bounds of their iframe. In an embedded scenario, dialog boxes must be created in a new browser window that remains connected to the spawning application in the main window. In the case of stand-alone, dialog windows are simply created as part of the uFE application.

The `UfeDialogWindowService` was designed to mostly conform to the APIs and patterns of Angular Material's MatDialog, with a few important exceptions. All dialog windows must be built as components; to create a dialog window, call the `openDialog(ComponentType<any>, MatDialogConfig?)` method of the `UfeDialogWindowService`. You will pass the component type of the dialog box you want created along with an optional MatDialogConfig object from the Angular Material library. You can learn more about the [MatDialogConfig object here](https://material.angular.io/components/dialog/api#MatDialogConfig). The `openDialog` method returns an `IfxDialogRef` that can be used to close the dialog, as well as to pass any data gathered by the dialog back to the spawning component.

`IfxDialogRef` exposes two methods and one parameter:

- `componentInstance: Component`
- `close(data: any): void`
- `afterClosed(): Observable<any>`

The component spawning the dialog box should call the `afterClosed()` method and subscribe to the returned observable if any return value is expected from the dialog box. If no return value is expected, this step may be omitted as the framework will close the dialog box when the dialog component calls `close()` on the `IfxDialogRef` in either case (see below). The `componentInstance` variable is a reference to the instantiated component itself and provides access to all the public members of the component.

All dialog window components will need to inject an `IfxDialogRef` in their constructors. On closing, they will call the `close()` method on the `IfxDialogRef` and pass any data to be returned. Calling `close()` will close the dialog box, removing it from the DOM, and pass the returned data to the component that spawned the dialog window.

You can read more about working with the `UfeDialogWindowService` component in the Detailed Information section below.

### The Login Component

The `Login` component handles authentication for the uFE. To use the `Login` component, add the Login component to your routes on an unguarded path. All other routes should include a routing guard (typically canActivate) that uses the `DataCommunicationService` to check if the user has authenticated (see the Detailed Information section on the DataCommunicationService). If they have not, the canActivate guard should route the user to the `Login` component. The `Login` component will complete the authentication workflow then reroute the user either to the route that was stored in the `UrlCapture` service (see below) or to the default route if no other route was stored.

The `UrlCapture` service: If you need to capture the route the user was attempting to navigate to, so they can be returned to that route after authentication is complete, use the `UrlCapture` service by calling `UrlCapture.storeUrl(url: string)`

# Detailed Information

### Features provided by the framework

The ifx-ufe library enables the creation of Micro Front-Ends (uFE) by providing the following:

- Shell Interaction
- Dialog Window Abstraction
- Peer uFE Interaction
- Notification Abstraction
- Authentication
- Peer uFE Discovery *(coming soon)*

By providing these services within the ifx-ufe library development teams can approach the creation of their Micro Frontend as they would any standard Angular application. The issues created by the fact that the application might be run in any of three potential environments (Shell, Stand-Alone, or Embedded into a native application) are handled by the library.

## Shell Interaction

The most common scenario under which most users will consume micro Frontends (uFEs) is within a shell. The shell is a separate application that creates a dashboard layout containing all the uFEs the user wants to interact with. The ifx-ufe framework provides four artifacts for interacting with the shell:

1. The UfeCommand Class
2. The message-listener directive
3. The shell-communicator service
4. The data-communication service

<br />

### The UfeCommand Class

The UfeCommand provides a standard format for communication between the Shell and a uFE as well as between peer uFE. All messages sent to the Shell and received from the Shell will be wrapped in a UfeCommand. The UfeCommand has the following members:

```
sender: string
command: string
params: any[]
```

**Sender** is the name of the application sending this message. For example, messages sent by the shell will contain the string 'SHELL' for the sender value.

Note that the value of sender must match the registered application name of the uFE sending the message. Once a uFE has registered a name and URL with the Front End Discovery Service, this name will be used for all interactions where the uFE must identify itself. You will not typically need to be concerned with the registered name of your own uFE, as the framework is aware of this name and will automatically include it where necessary if you use the helper methods provided by the `ShellCommunicatorService`.

**Command** is a string from among the established command strings that uFEs are allowed to send to the Shell. These commands include:

- **OPEN_DIALOG:** Requests the Shell allow this uFE to open a modal dialog

- **CLOSE_DIALOG:** Notifies the Shell this uFE has completed its work with an already open modal dialog and the dialog should now be closed.

- **NOTIFICATION:** Requests the Shell display a non-modal popup notification

- **OPEN_UFE:** Requests the Shell open a peer-level uFE.

- **PEER_MESSAGE:** Requests the Shell pass this UfeCommand to a peer uFE. The recipient ufe must be specified as the first element of the `params` array. Any data to be passed to the peer uFE is included in the params array.

**Params** An array of data to be passed with this UfeCommand. In the case of a `PEER_MESSAGE` command the application name of the intended recipient must be the first parameter in the array *(see note on application name under `Sender`)*.

You will rarely need to send a `UfeCommand` to the Shell directly as helper methods are provided by the `ShellCommunicatorService` to simplify the task of communicating with the Shell and peer uFEs. See the section on the `ShellCommunicatorService` for details.

For complete documentation of the possible values of the `command` field of the `UfeCommand` see the file UfeCommand.md included with the ifx-ufe framework.

<br />

### The ufeMessageListener directive

The message listener directive `ufeMessageListener` should be attached to the root element of the uFE application. There must be a single div that contains all the other elements of the application, this is the div the message listener belongs on.
Example:

```angular2html
<div ufeMessageListener [ufeName]="'testApp'" [baseRoute]="'home'" >
  <appMainInterface></appMainInterface>
  ...
</div>
```

The `ufeMessageListener` directive receives messages passed to your uFE. Some of these messages the ifx-ufe framework will take action on itself as these messages are meant for internal use by the framework. Other messages it will pass on via the `UfeCommands()` method of the `DataCommunicationService` which your uFE will need to handle.

**Messages Handled by the `ufeMessageListener` directly:**

1. **EXECUTION_ENVIRONMENT** This message is passed by a host environment (either a shell or native application) to notify the uFE library of the environment it is operating in. The library will adjust how message are passed, notifications are sent, and dialogs are opened based on this knowledge. Possible values (passed in the parameters array) for the EXECUTION_ENVIRONMENT command include: SHELL, NATIVE_SHELL, SELF, and EMBEDDED. A uFE will default to the value of 'SELF' indicating the uFE is running stand-alone; this value will be changed by the EXECUTION_ENVIRONMENT command sent to the uFE from an outside environment. A shell will send the value SHELL, or in the case of an iOS application NATIVE_SHELL, while an environment where the uFE is running within a native app will send the EMBEDDED value.

2. **JWT_TOKEN** If the uFE is operating within the Shell, the Shell will pass the current authentication token to the uFE. The `ufeMessageListener` will store this token within session storage. This JWT token can later be used for authorization when elevated privileges are required to access a feature. The `DataCommunicationService` will pass a notification that a new JWT token was received via the `ufeCommands()` method, though no action is required to be taken by the uFE directly on this message.

3. **UFE_READY** Once a uFE is loaded into memory and ready to receive messages the ifx-ufe framework sends a UfeCommand with this command to the top level context. If the uFE is running within the Shell or an embedded environment, the host application will receive this message and respond to it appropriately (usually by sending the uFE JWT tokens for authorization as well as with other critical information). If the uFE is running stand-alone the ifx-ufe framework will receive its own message, initiate the authentication workflow and display the ufe-header.

**Messages that must be handled by client uFE code**

1. **LANGUAGE_TOGGLE** This is a request from the Shell to change the display language of this uFE. Either 'EN' (for English), or 'DE' (for German) will be included as the first parameter within the `params` array.
2. **THEME_TOGGLE** This is a request from the Shell to change the theme used by this uFE. The name of the requested theme will be included as the first parameter within the `params` array. Angular CSS and typography themes will be provided by IT OS, and should be used for all uFE development.
3. **PEER_MESSAGE** This is a message passed by a peer-level uFE. Any data included with the message will begin with the second item in the `params` array.

#### The DOCKOUT Cycle

A Shell may pass a UfeCommand to the uFE of the type DOCKOUT_REQUEST. This command indicates the user has requested this uFE be docked-out. When a uFE is docked-out a new instance of the uFE that exactly mirrors the current state of the existing instance is created within a new browser window. When this UfeCommand is received, the uFE must respond with a DOCKOUT_REPLY UfeCommand to the Shell. The DOCKOUT_REPLY UfeCommand must include the uFE's current URL, including any required query string to match the existing instance's current state as the first element of the `params` array. Any additional parameters required to match the current state should be included in the params array as subsequent elements. See notes on the `DOCKOUT_CONFIGURE` command below.

The `MessageListenerDirective` includes an input named `autoDockout` that defaults to true. If all the data your uFE will need to recreate a given state is encapsulated within the current URL of the uFE, leave this input in the default state. If the `autoDockout` input is true, the ifx-ufe library will respond to any `DOCKOUT_REQUEST` UfeCommand sent by a shell on its own without passing the `DOCKOUT_REQUEST` on to the host uFE. If however, your uFE will need to supply additional parameters to the docked-out instance, set this input to false where the `MessageListenerDirective` is included in your application as follows:

```angular2html
<div ufeMessageListener [ufeName]="'testApp'" [baseRoute]="'home'" [autoDockout]="false" >
  <appMainInterface></appMainInterface>
  ...
</div>
```

Setting the `autoDockout` input to false will cause the ifx-ufe library to pass the `DOCKOUT_REQUEST` UfeCommand to the uFE itself for handling through the `DataCommunicationService.ufeCommands` observable.

**The DOCKOUT_REPLY UfeCommand**

When a uFE receives a `DOCKOUT_REQUEST` UfeCommand from a shell, it must reply with a `DOCKOUT_REPLY` UfeCommand. The first parameter of the `DOCKOUT_REPLY` UfeCommand's `params` array must be the full url including any required query string to duplicate the current instance's state. Additional parameters that the docked-out instance of the uFE will need to replicate the current state should be included as subsequent elements in the `params` array.

**The DOCKOUT_CONFIG UfeCommand**

If your uFE requires additional parameters for the docked-out instance to replicate an existing state, these additional parameters will be sent by the shell to the docked-out instance in a `DOCKOUT_CONFIG` UfeCommand. You will need to implement a handler for this command that has knowledge of what order any additional parameters will be in, and how to make use of them.

#### Optional Inputs to the MessageListenerDirective

The message listener directive provides a number of optional inputs that allow you to tailor the behavior of the ifx-ufe library to the needs of your particular uFE. These optional inputs include:

- `autoDockout: boolean` Controls whether the ifx-ufe library will handle DOCKOUT_REQUEST commands or pass them on to the uFE for handling. See section on the Dockout Cycle for more detail. The library will handle DOCKOUT_REQUESTS independently if set to true, pass the request to the uFE if false. Defaults to `true`.
- `showLanguageControls: boolean` Controls whether the UfeHeader component will display controls to select different languages or not. Language controls are displayed if set to true, hidden if set to false. Defaults to `true`.
- `linkGroup: string` A name registered with the FrontEndDiscoveryService that defines a group of links to external applications that should be made available to this uFE. If set, the links included in the LinkGroup will be made available in the "Links" sub-menu of the UfeHeader component. If not set, the links sub-menu will not be included in the UfeHeader component.

### The DataCommunication Service

The `DataCommunicationService` provides an API that allows the client uFE to get various information from the ifx-ufe framework.

#### Available Methods

- `getEnvironment(): string` Returns a string indicating what environment the uFE is currently running under. Possible responses include: SHELL, NATIVE_SHELL, SELF or EMBEDDED.
- `getAuthToken()` returns an observable of the current authentication tokens. The AuthToken object emitted by the observable includes both the Kerberos and Credential tokens if they are both available and has the following structure:

```typescript
{
  kerberos: any = null;
  credentials: any = null;
  idToken?: IdAuthToken = undefined;
}

IdAuthToken {
  kerberos: any = null;
  credentials: any = null;
}
```

- `getKerberosToken()` returns the current kerberos authentication token, null if no such token exits. Note that the token is a string representing the base64 JWT token returned by the security token service (STS).
- `getCredentialToken()` returns the current credential authentication token or null if no such token exists. Note that the token is a string representing the base64 JWT token returned by the security token service (STS).
- `ufeCommands()` returns an observable of UfeCommand representing all UfeCommands that are passed on to the uFE from the framework. Client uFE will need to subscribe to this observable and implement handlers for the UfeCommands listed in the section "Commands Passed to the uFE (see below)"
- `getSubscriberData()` returns a SubscriberData object giving current status information on authenticated users. Note that this method returns the current subscriber data as of the time the method is called, not an Observable that provides ongoing access to updates in subscriber data. For an Observable of SubscriberData use the `subscriberData$` property described below. The SubscriberData object has the following structure:

```typescript
class SubscriberData {
  kerberos: SubscriberInfo;
  credentials: SubscriberInfo;
}

class SubscriberInfo {
  subscriberName: string = '';
  loginStatus: boolean = false;
  userName: string = '';
  clientId: string = '';
}
```

- `loginCredenttials()` Executes a login workflow that requests the users credentials. NOTE: This method will not typically need to be called by client uFE, as all normal authentication tasks are handled by the LoginComponent. See the Authentication section for details.
- `loginKerberos()` Executes a login workflow using the kerberos identity of the computer the uFE is executing on. NOTE: This method will not typically need to be called by client uFE as all normal authentication tasks are handled by the LoginComponent. see the Authentication section for details.

#### Available Properties

- `isAuthenticated$` an observable that emits AuthStatus objects indicating if the user has been authenticated or not. The booleans in the AuthStatus object will be true if the user is currently authenticated using the relevant method, false otherwise. The AuthStatus object has the following format:

```typescript
{
  kerberos: boolean;
  credentials: boolean;
}
```

- `currentAuthStatus` an AuthStatus object. This object is the current state of authentication as of the time the property is accessed, not an observable that provides ongoing updates on changes to authentication status. Generally currentAuthStatus should be preferred for canActivate guards while isAuthenticated$ should be preferred for uFE components that need to verify if a user is authorized to use a restricted feature.
- `subscriberData$` an Observable of SubscriberData. See the section on `getSubscriberData()` above for the structure of the SubscriberData object.

### The ShellCommunicatorService

The `ShellCommunicatorService` enables interaction between this uFE and the Shell, and transitively with other uFE. The `ShellCommunicatorService` provides the following helper methods to facilitate routine tasks:

1. `sendNotification(notification: NotificationModel)` Requests the Shell display this `NotificationModel` as a non-modal pop-up notification. It is recommended one of the helper methods described below be used when displaying a notification rather than calling `sendNotification` directly as the helper methods obviate the need to deal with the `NotificationModel` directly while benefiting from internal error checking.
2. `sendInfoNotification(title: string, message?: string): void` This method displays a popup notification with a white background. The notification will be hidden automatically after five seconds. Only the title field is required, and if no other fields are provided, the title will be displayed as the message itself. The optional message field allows a different notification title and body to be set.
3. `sendErrorNotification(title: string, message?: string): void` Displays a popup notification with a red background. The notification will not be hidden until dismissed by the user. Only the title field is required, and if no other fields are provided, the title will be displayed as the message itself. The optional message field allows a different notification title and body to be set.
4. `sendSuccessNotification(title: string, message?: string): void` Displays a popup notification with a green background. The notification will be hidden automatically after five seconds. Only the title field is required, and if no other fields are provided, the title will be displayed as the message itself. The optional message field allows a different notification title and body to be set.
5. `sendWarningNotification(title: string, message?: string): void` Displays a popup notification with a yellow background. The notification will be hidden automatically after five seconds. Only the title field is required, and if no other fields are provided, the title will be displayed as the message itself. The optional message field allows a different notification title and body to be set.
6. `closeOpenNotification(): void` Allows an active notification to be dismissed programmatically.
7. `openUfe(ufe: string)` Requests the Shell open the ufe identified by the application name passed in the 'ufe' field. If the requested uFE is already open, the Shell will surface the uFE within the interface.
8. `sendPeerMessage(ufe: string, message: any)` Requests the Shell pass this message to the application identified by 'ufe'. Any data to be passed to the receiving uFE can be contained within the 'message' parameter. If the intended recipient of the `sendPeerMessage` command is not currently open, the framework will open this uFE and send the `UfeCommand` to it after the target uFE has loaded.

Additionally, the `ShellCommunicatorService` provides one low-level method for sending messages to the Shell: `sendShellMessage(message: UfeCommand)`. However, it is not recommended this method be used by uFE directly as it does not benefit from automatic error checking and other features built into the helper methods.

### Passing environment parameters from a shell to a uFE via query string

A shell may set two parameters within the enclosed uFE by passing parameters in a query string. The two parameters that can be set are:

- \_ifxEnvironment Possible values include: SHELL, NATIVE_SHELL, EMBEDDED. This allows the shell to set the EXECUTION_ENVIRONMENT of the uFE directly rather than allowing the library to determine this variable on its own. This is optional under the SHELL environment but required under the NATIVE_SHELL environment. It should be preferred to set this parameter explicitly under all environments as it is slightly more efficient allowing for faster loading and response time of the uFE.
- \_ifxHeader Possible values include: true, false. This parameter allows a shell or native shell to directly control whether a uFE's header bar containing the language and login controls is displayed. By default, the header bar is not displayed in a SHELL or NATIVE_SHELL environment. This parameter should only be set if there is a need to override the default behavior of the uFE header.

Recall that querystring parameters are passed with the URL. Following is an example of calling a uFE's url with these querystring parameters set:

localhost:4200/home?\_ifxEnvironment=NATIVE_SHELL&\_ifxHeader=true

## Library Behavior Under Various Execution Environments

Because a uFE might operate in a variety of execution environments, the behavior of the ifx-ufe library will adjust depending on the environment the uFE is running in. Here is a brief summary of the differences:

- Stand-alone (EXECUTION_ENVIRONMENT = SELF) In this situation the ifx-ufe library will handle all authentication workflows itself. The UfeHeader will be displayed and attempts to communicate with peer uFE will be handled by the library directly. Peer uFE will be opened within new tabs in the user's browser
- Shell (EXECUTION_ENVIRONMENT = SHELL) In this scenario the ifx-ufe library will send a message to the enclosing shell once the uFE is fully loaded and ready to receive commands. The shell will then send UfeCommands to the uFE passing the current authentication tokens, language, and theme settings. Attempts to send a peer uFE will be passed to the shell which will act as a message broker between the two uFE. The UfeHeader will not be displayed, as it is assumed the shell will contain the relevant controls to change language, login using credentials etc. When the shell receives input from a user to change any of these settings it will pass the relevant information to all its contained uFE via UfeCommands.
- Native Shell (EXECUTION_ENVIRONMENT = NATIVE_SHELL) Under this execution environment the ifx-ufe library will send a message to the shell (UFE_READY) once it has fully loaded letting it know the app is ready to receive commands. The library will not attempt to perform authentication as the iOS shell will pass the current authentication tokens to the app via UfeCommand, similar to the situation in the SHELL environment. The UfeHeader will be displayed. Attempts to communicate with a peer will be handled by the uFE itself, opening peer uFE in new browser windows similar to the situation under a stand-alone environment. **NOTE**: because of the unique characteristics of the NATIVE_SHELL environment and running a uFE within an iOS app, the enclosing iOS shell must set the execution environment using querystring parameters. See the section on setting application environment variables via querystring in the Shell Interaction section for more details. This is in contrast to other environments where the ifx-ufe library is able to determine the execution environment on its own.
- Embedded (EXECUTION_ENVIRONMENT = EMBEDDED) This scenario occurs when a uFE is running within an embedded browser window in a native Windows application. The ifx-ufe library will not attempt authentication but rather will send a message to the enclosing environment once the app has fully loaded letting it know the app is ready to receive commands. The enclosing native application will pass the current authentication token, language, and theme settings to the app via UfeCommand. The UfeHeader will not be displayed. Dialog boxes spawned by the uFE will be opened in new browser windows to allow for dialogs larger than the size of the uFE within the enclosing native app. Attempts to communicate with a peer uFE will cause the peer uFE to be opened within a new window in the enclosing application.

## Authentication

Authentication is the process of validating a user is who they claim to be, and by extension that they are allowed to use the system. The ifx-ufe library abstracts the authentication process for client uFE, requiring only that they use the included Login component to perform authentication, and supply appropriate canActivate guards for the uFE's components. Authentication data including whether a user is currently authenticated, and information on the user including name etc. is available through the DataCommunication service.

**IMPORTANT NOTE:** Due to security requirements, all uFE *must* use authentication. The ifx-ufe library will not send or receive messages for a uFE that has not authenticated potentially causing the uFE to become non-functional.

### profileConfig.json

The `profileConfig.json` file tells the ifx-ufe library where to look for the Kerberos and Credential identity files. This allows users to define where these identity files are actually stored in their uFE. The `profileConfig.json` file must exist in the uFe's assets folder and have the following structure:

```
{
  "kerberosLocation": string,
  "credentialLocation": string
}
```

These strings should be the path to the respective identity files. For example, the value of `"credentialLocation"` might be `"assets/profiles/credentials.json"`.

### Kerberos and Credential Identity Files

In order for the ifx-ufe framework to handle authentication using oidc, you will need to create two identity files and one configuration file. The configuration file must be located within the assets directory of your application while the two identity files can be located anywhere.

The configuration file must be named

-`profileConfig.json`

While the two identity files must be named

- kerberos.json
- credentials.json

The `profileConfig.json` configuration file tells the ifx-ufe framework where to look for your identity files. This file must be located in the assets folder of you Angular application and has the following structure:

```
{
  "kerberosLocation": "assets/profiles/kerberos.json",
  "credentialLocation": "assets/profiles/credentials.json"
}
```

The string indicating the location of the relevant identity file can point to any location accessible within your application.

Both identity files have a common structure as follows:

```
{
  "configId": "kerberos",
  "authority": "https://ilogin-test.infineon.com",
  "clientId": "AdiExampleSSO",
  "redirectUrl": "http://localhost:4200/?auth=kerberos",
  "scope": "openid",
  "responseType": "code",
  "useRefreshToken": false,
  "renewTimeBeforeTokenExpiresInSeconds": 10
}
```

Only the following fields will need to be changed for your uFE

- `configId` Either enter "kerberos" or "credentials" as is appropriate to the file
- `clientId` Enter the clientId name created when you set your application up with iSecure
- `redirectUrl` Enter the main URL of your application. This URL must match the redirectUrl you entered when setting your application up with iSecure

For information on how to set up a new clientId and redirectUrl for you uFE, [see this document](https://confluencewikiprod.intra.infineon.com/display/iSecure/iSecure+Onboarding+Process)

### The Login Component

The login component handles the authentication workflow for your application. The login component makes the following assumptions:

1. Your application uses Angular routing
2. The Login component exists on an unguarded route
3. The routing guards in your application will use the `DataCommunication` service to check if a user has been authenticated and redirect the users' browser to the Login component if they are not.

When the users' browser is directed to the Login component, the authentication workflow is initiated by the component. Once complete the Login component will redirect the user to another part of the application. If the routing guard (e.g. canActivate) that directed the user to the Login component stored a URL using the `UrlCapture` service, the user will be redirected to the stored URL. Otherwise, the user will be redirected to the `baseRoute` passed as an input to the `MessageListenerDirective` in the template of the primary component of the app.

### The UrlCapture Service

The `UrlCapture` service exposes two methods that allow a routing guard such as `canActivate` to store a URL the user was attempting to navigate to, but was denied by the guard. The user will be redirected to this URL after the `Login` component has completed the authentication workflow. The public API of the `UrlCapture` service is as follows:

- `storeUrl(url: string)` stores a URL for later reference by the application
- `getUrl(): string` returns the previously stored URL

### How to set up authentication using the ifx-ufe library

This section provides a brief walk-through of how to set up and use authentication using the ifx-ufe library.

First, set up the profileConfig.json, kerberos.json and credentials.json files as detailed in the sections above.

Second, in your uFE, wherever your routes are defined (usually in either your app.module or app-routing.module) import the LoginComponent and in the routes array add the following route:

`{path: '', component: LoginComponent}`

Third, create a canActivate guard as a service. If you need detailed instructions on Angular canActivate guards, you can find them [here](https://angular.io/api/router/CanActivate) Below is a simple example of a canActivate guard:

```typescript
import { Injectable } from '@angular/core';
import { UrlCaptureService } from 'ifx-ufe';
import { DataCommunicationService } from 'ifx-ufe';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(
    private router: Router,
    private urlCaptureService: UrlCaptureService,
    private ufeData: DataCommunicationService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.ufeData.currentAuthStatus.kerberos && !this.ufeData.currentAuthStatus.credentials) {
      //this stores the path the user was trying to navigate to so they can be routed back to it once
      //authentication is complete
      let deepLink = this.getUrlString(route);
      this.urlCaptureService.storeUrl(deepLink);

      //note that we route the user to the blank path - i.e. the LoginComponent
      this.router.navigateByUrl('');
      return false;
    }

    return true;
  }

  private getUrlString(route: ActivatedRouteSnapshot): string {
    let outputArray: string[] = [];
    route.url.forEach(segment => {
      outputArray.push(segment.path);
    });

    return outputArray.join('/');
  }
}
```

Fourth, add the canActivate guard to all routes in your application. Example:

```typescript
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: FunctionalComponent, canActivate: [AuthGuardService] },
  { path: 'deep', component: DeepComponent, canActivate: [AuthGuardService] },
];
```

Note that the LoginComponent is the only unguarded route.

That's it! The library will do the rest for you!

Since the Login component is the only unguarded route, when a users first navigates to your application they will be routed to the Login component. From there, the library will determine which execution environment your uFE is currently operating under and take the appropriate steps to authenticate the user. Once authentication is complete, the user will be rerouted back to the path they were originally trying to navigate to.

## The ifx-ufe-header component

The `ifx-ufe-header` component provides a standard application header and controls when your uFE is running stand-alone. The `ifx-ufe-header` tag should be added to your application immediately after the root element which the `ufeMessageListener` directive is applied to. The `ifx-ufe-header` will detect what environment your application is running in, and provide the header if needed. The `ifx-ufe-header` takes one input, "title", a string which will be displayed as the title in the header bar.

```angular2html
<div ufeMessageListener [ufeName]="'testApp'" [baseRoute]="'home'" >
  <ifx-ufe-header [title]="'My First uFE'"></ifx-ufe-header>
  <h1>My Super Awesome Micro Frontend</h1>
  <app-awesome-component></app-awesome-component>
  ...
</div>
```

The `ifx-ufe-header` will execute a slide-down animation if the ifx-ufe framework detects that the uFE is running in a stand-alone environment. Otherwise, the header will remain hidden with the expectation that the host environment the uFE is running in (e.g. the Shell or an Embedding application) will provide the relevant controls.

The language toggle within the `ifx-ufe-header` uses the same notification method as the Shell app to notify your uFE of language changes - Sending a `UfeCommand` with "LANGUAGE_TOGGLE" set as the command. Therefore, you will not need to write a separate handler method to react to language change notifications from the `ifx-ufe-header`.

## Dialog Window Abstraction

A uFE might run in any one of three possible environments, all of which require a different approach to how dialog boxes are displayed:

1. **Shell environment**: Dialog windows must be created within the Shell application rather than the uFE, but the dialog box must remain connected to the spawning uFE. As uFE run within `<iframe>` elements, they are unable to generate content that extends beyond the limits of their `<iframe>`.
2. **Embedded environment**: Dialog windows must be created as new browser windows but remain connected to the spawning uFE. Any uFE running in an embedded context will have a minimal browser window and will not be able to display large dialog boxes within the limits of this window.
3. **Stand-Alone environment**: uFE can create dialog boxes using standard techniques as the dialog box will fit entirely within the bounds of the uFE.

The `UfeDialogWindowService` abstracts solutions to the issues raised by the variable environments. To use the `UfeDialogWindowService`, create your dialog box as a separate component within your uFE. All dialog box components will need to inject an `IfxDialogRef` in the constructor (see information below on `IfxDialogRef`), and optionally, a `MAT_DIALOG_DATA` token if the dialog will need to have information passed to it. [You can learn more about the `MAT_DIALOG_DATA` token here.](https://material.angular.io/components/dialog/api#MAT_DIALOG_DATA)

The `UfeDialogWindowService` exposes one public method:

- `openDialog(ComponentType<any>, MatDialogConfig?): IfxDialogRef` This method opens the passed ComponentType as a dialog box appropriate to the execution environment. You may optionally pass a `MatDialogConfig` object to customize the details of the dialog box. [You can find the documentation on the `MatDialogConfig` here.](https://material.angular.io/components/dialog/api#MatDialogConfig)

### IfxDialogRef

The `openDialog()` method returns an `IfxDialogRef`. This is the same `IfxDialogRef` that was injected into your dialog box component and provides a means of interaction between the spawning component and the dialog box component. The `IfxDialogRef` provides two public methods, one which should be used by the dialog component, the other by the spawning component:

- `close(data: any)` gets called by the dialog box component. Calling this method will close the dialog window and dispose of the dialog box component. Any data passed to the `close()` method will be sent to subscribers of the `IfxDialogRef`

- `afterClosed(): Observable<any>` returns an observable which the component that spawned the dialog box can subscribe to. This observable will fire once the dialog box component calls `close()` on the `IfxDialogRef` passing any data returned by the dialog box.

- In addition to the above methods, the `IfxDialogRef` provides one public field `componentInstance` which is a reference to the instantiated dialog box component itself. All the components public members are accessible through this reference.

## Peer ufE Interaction

Micro Frontends are by their nature narrowly focused on a single task. In order to maintain this strong separation of concerns it will sometimes be necessary to hand a task off to another uFE for further processing. For example, a "Lot Search" uFE may allow a user to find where in the FAB, and the lot's process flow a given lot is. However, if the user then wants to view the details of that lot, this would fall outside the scope of a "Lot Search" uFE and would ideally need to be handed off to a "Lot Detail" uFE.

The ifx-ufe library provides the `ShellCommunicatorService` to handle these tasks. In particular, the `ShellCommunicatorService` exposes two methods to facilitate communicating between uFE:

- **openUfe(ufe: string)** Requests the Shell open this uFE if it is not already open.
- **sendPeerMessage(ufe: string, message: any)** The ufe parameter is the registered name of the uFE the message should be sent to (the recipient). The message parameter should contain any data that needs to be passed to the recipient. If the intended recipient uFE is not already open, the shell will open it before sending the message.

## Notification Abstraction

Similar to the situation with dialog boxes, depending on the execution environment of the uFE, notifications will need to be handled in different ways:

- In the Shell, notifications will need to be spawned within the Shell application to ensure notifications are displayed in a consistent location.
- In an embedded environment notifications will need to be displayed by the embedding applications native notification method.
- In a stand-alone environment notifications will need to be spawned by the uFE directly.

The ifx-ufe framework abstracts the code necessary to detect the environment the uFE is running in and display notifications appropriately. To display a notification call the `sendNotification(notification: string)` method of the ShellCommunicatorService. For more details on this method see the section on the `ShellCommunicatorService`.

## Front End Discovery Service

The frontEndDiscovery service will eventually provide functionality to allow publishers of uFE to register their uFE so the shell and other uFE can consume them. This functionality is currently a stub with no true back end. To allow ease of development, the frontEndDiscovery service will look in your application's assets folder for a file named frontEnd.json. The structure of the file is as follows:

```json
{
  "AvailableUfe": [
    { "name": "Job Controller", "url": "http://localhost:3002", "location": "two" },
    { "name": "FrameworkLibraryTest", "url": "http://localhost:2222", "location": "one" }
  ]
}
```

The file should have a single object with one property "AvailableUfe". That property's value is an array of AppDescription Objects each with three fields:

```typescript
{
  name: string;
  url: string;
  location: string;
}
```

- `name` specifies the registered name of the uFE
- `url` is the URL where the uFE can be located
- `location` is a string spelling a number one through five indicating where the uFE should be located on the Shell app's five panel layout.

## Code Quality Tools Setup

### Linting Report

To generate a report first the NPM command "lint-json" needs to be executed. This generates a JSON file with the lint results which is then processed by the tool "ng-lint-report" to create an HTML file from it. This is done via the command "report". The lint report is found in the newly created folder "ng-lint-report"

### Code Coverage Report

The generator used to create an HTML coverage report is found [here](https://github.com/danielpalme/ReportGenerator). It needs to have the .NET Core runtime installed to work and needs to be installed locally via the dotnet-cli with command "dotnet tool update dotnet-reportgenerator-globaltool --tool-path tools".

To generate a report first the NPM command "test" has to be executed. This generates a xml file with the coverage results which is then processed by the report generator to create an HTML file from it. This is done via the command "tools\reportgenerator -reports:projects/ifx-ufe/testresults/coverage/code-coverage.xml -targetdir:projects/ifx-ufe/coveragereport"

### Code Metrics

To get a report of the circular complexity of the application the tool [code-metrics CLI](https://github.com/kisstkondoros/codemetrics-cli) is used. To make it work it has to be installed globally via NPM. To generate a code metrics text file with the contents of the cli output use the NPM command "code-metrics".
