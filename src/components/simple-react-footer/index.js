import React from "react";
import SimpleReactFooter from "simple-react-footer";

function Footer() {
  const description = "Check me out on the platforms below! I'd be more than happy to reply to any work-related messages sent my way! Let me hear your feedback on my work, or let me know how I can help you achieve your goals.";
  const title = "Follow me everywhere!";
  const columns = [
    {
        title: "",
        resources: [
            {
                name: "",
                link: ""
            },
            {
                name: "",
                link: ""
            },
            {
                name: "",
                link: ""
            },
            {
                name: "",
                link: ""
            }
        ]
    },
    {
        title: "",
        resources: [
            {
                name: "",
                link: ""
            },
            {
                name: "",
                link: ""
            }
        ]
    },
    {
        title: "",
        resources: [
            {
                name: "Github Profile",
                link: "https://github.com/mmifs"
            },
            {
                name: "",
                link: ""
            }
        ]
    }
 ];
 return <SimpleReactFooter 
    description={description} 
    title={title}
    columns={columns}
    linkedin=""
    facebook=""
    twitter=""
    instagram=""
    youtube="U?"
    pinterest=""
    //copyright=""
    iconColor="black"
    backgroundColor="bisque"
    fontColor="black"
    copyrightColor="darkgrey"
 />;
};

export default Footer;