Notification Component
Create a simple Notification component that is rendered inside of the provided App component.

The App will be passed props that look like this:

{
    notification: {
        message: 'Hello World',
        type: 'error'
    }
}
The resulting markup will look like this:

<div id="app">
    <div class="alert alert-danger">
        Hello World
    </div>
</div>
And the rendered output will look like this:



Hello World

To see the rendered output or the resulting markup simply can run the provided test cases.

Alert Classes
There are four types of notifications that can be used and they each correspond to a specific alert class. These may look familiar as they are the same classes used by Bootstrap:

type	class
success	alert alert-success
message	alert alert-info
caution	alert alert-warning
error	alert alert-danger
Default Class
If no type is provided in the notification property, then the default class should be alert alert-info.

No Message Provided
If no message is provided, the notification should not render at all. In which case, the resulting html should be simply:

<div id="app">
</div>





Let's build on our Notification component by creating a Confirmation component. This Confirmation component should be a Notification with two additional buttons to get the user's response accept and decline.

The props passed to Confirmation will look like this:

{
    message: 'Should we bake a pie?',
    type: 'message',
    accept: function() {
        // parent component can do something with accept
    },
    decline: function() {
        // parent component can do something with decline
    }
}
The resulting Component markup should look like this:

<div class="alert alert-info">
    <p>Should we bake a pie?</p>
    <div class="btn btn-primary">Sure</div>
    <div class="btn btn-danger">No Thanks</div>
</div>
Which, rendered, should look like this:


Should we bake a pie?




Not the prettiest component in the world, but it'll do for now.

Hiding the Confirmation
For now the Confirmation should mantain it's own state. When accept or decline are clicked, the confirmation should no longer render. Instead it should render null.






import React from 'react';

// TODO: Create the Notification Component

function Notification (props) {
    let notify = '';
    console.log(Object.entries(props.notification).length);
   if(Object.entries(props.notification).length > 0){
       
       const {notification} = props.notification;
       const alertType =  notification.type != (undefined || null ) ? notification.type : 'info';

       notify = (<div className={`alert alert-${alertType}`}>
                   {props.notification.message}
           </div>)
   }
 

 return notify;
}

const data = {
    // notification: {
    //     message: 'jj',
    //     type: ''
    // }
}

function App(props) {
    // TODO: Pass Notification its props
  
	return (
		<div id="app">
			<Notification notification={data}  />
		</div>
	)
}

export default App;