
<script>
	//1443420979247602 --> CheranPhotography
	//655373897876273 --> Connect
  window.fbAsyncInit = function() 
  {
  	FB.init({
    appId      : '1443420979247602',
    status     : true, // check login status
    cookie     : true, // enable cookies to allow the server to access the session
    xfbml      : true  // parse XFBML
  	});

  	FB.getLoginStatus(function(response) 
	{
    	if (response.status === 'connected') 
      	{
          alert(" connected");
        //  window.location="Home?userId="+response.authResponse.userID+"&accessToken="+response.authResponse.accessToken;
              // what to do with the response
		// testAPI();
      	}
    	else if (response.status === 'not_authorized') 
    	{
    		console.log("Response:"+response);
    		console.log(JSON.stringify(response));
    		alert("not_authorized")
    		
          
      	}
    	else
    	{
    		alert("Please login with FB to explore more :-)")
        
      }
  });

};

  // Load the SDK asynchronously
  ( function(d)
		  {
   				var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
   				if (d.getElementById(id))
   				{
   					return;
   				}
				js = d.createElement('script'); js.id = id; js.async = true;
				js.src = "//connect.facebook.net/en_US/all.js";
				ref.parentNode.insertBefore(js, ref);
		   }
		  (document));

   </script>
   <script type="text/javascript">
        function loginFacebook() 
        {
            FB.login(function(response) 
            {
                if (response.authResponse) 
                {
                	// window.location="Home?userId="+response.authResponse.userID+"&accessToken="+response.authResponse.accessToken;
                	getUserInfo();
                    // connected
                   
                } 
                else 
                {
                	console.log(response);
                    // cancelled
                }
            },
            {scope: 'user_about_me,user_interests,publish_stream'});
        }
        
        function getUserInfo() {
            FB.api('/me', function(response) {
            	alert("Welcome "+response.name);
             //response.name       - User Full name
             //response.link       - User Facebook URL
             //response.username   - User name
             //response.id         - id
             //response.email      - User email
      
             });
        }
        
        function Logout()
        {
            FB.logout(function(){document.location.reload();});
         
        }
   </script>


