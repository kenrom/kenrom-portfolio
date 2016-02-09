if (Meteor.isServer) {

  if (Werks.find().count() > 0) {
    console.log("Removing " + Werks.find().count() + " work records on the server.");
    Werks.remove({});
    console.log("Now there's..." + Werks.find().count() + " work records on the server.");
  };
  if (Skills.find().count() > 0) {
    console.log("Removing " + Skills.find().count() + " skills records on the server.");
    Skills.remove({});
    console.log("Now there's..." + Skills.find().count() + " Skills records on the server.");
  };

  Meteor.publish("work", function () {
    return Werks.find({}, {
      sort: {
        'order': 1
      }
    });
  });
  Meteor.publish("skill", function () { 
    return Skills.find({});
  });


  Meteor.startup(function () {
    if (Werks.find().count() == 0) {
      var job = [
        {
          "name": "Verizon Wireless",
          "client": "Verizon Wireless",
          "type": "Verizonwireless.com (B2C) on Mobile, Tablet and Desktop Apps",
          "tech": ["HTML", "Javascript", "JSON", "JQuery", "CSS3", "JSP", "Java/J2EE", "Accurev", "Oracle ATG", "WebLogic", "WebSphere"],
          "story": "A rare opportunity to work within a large and complex environment of eCommerce applications, I implemented UI enhancements for Verizon's mobile and tablet (B2C) eCommerce applications through regular release cycles. This involved creating production-level solutions to ongoing business requirements, and ensuring necessary code changes remained well-organized and results predictable.",
          "link": "http://www.verizonwireless.com/",
          "images": ["images/verizon_listing01.jpg"],
          "order": 0
        }, {
          "name": "Viscira",
          "client": "Viscira",
          "type": "Joomla- Driven Web Site",
          "tech": ["HTML", "Javascript", "Flash", "CSS3", "MySQL", "PHP", "Joomla CMS", "Custom Theme"],
          "story": "The Viscira Website is driven by Joomla, and is a good example of my CMS implementation work. I installed and configured the back-end, admin interface, additional plug-ins for breadcrumb navigation and published story indexes, created the custom theme for all story templates types, and developed much of the site’s CSS. ",
          "link": "http://www.viscira.com/",
          "images": ["images/viscira_listing01.jpg", "images/viscira_listing02.jpg", "images/viscira_listing03.jpg"],
          "order": 1
        }, {
          "name": "Amgen Nplate eJournal",
          "client": "Viscira",
          "type": "Flex Web Application",
          "tech": ["Flex", "Flash Builder", "ActionScript", "HTML", "Javascript", "CSS", "Photoshop"],
          "story": "The Nplate Interactive E-Journal is a Flex Web app I developed for Amgen, working with a designer and a motion graphics artist. It is mainly a long technical presentation rendered as video, with a chapter index, interactive glossary, and links to supporting documentation. Glossary items are optionally triggered throughout the presentation via cue points embedded in the videos. ",
          "link": "http://kenrom-media.s3-website-us-west-1.amazonaws.com/media/nplate/index.html",
          "images": ["images/nplate_listing01.jpg", "images/nplate_listing02.jpg", "images/nplate_listing03.jpg", "images/nplate_listing04.jpg", "images/nplate_listing05.jpg", "images/nplate_listing06.jpg", "images/nplate_listing07.jpg", "images/nplate_listing08.jpg", "images/nplate_listing09.jpg"],
          "order": 2
        }, {
          "name": "CathFlo",
          "client": "Viscira",
          "type": "iPad Application",
          "tech": ["Flex", "Flash Builder", "ActionScript", "Photoshop"],
          "story": "The Cathflo app was my first mobile iOS application, authored in Flash Builder 4.5.  It was a relatively straight-forward medical teaching tool, designed to educate and assess medical professionals on proper catheter management and then send users’ quiz results to the client company. Developing this app was interesting because it was my first experience developing specifically for the mobile platform and working with orientation, touch, and gesture events. The app was created for a very limited audience and is not publicly available. ",
          "path": "",
          "images": ["images/cathFlo_ipad_listing.jpg"],
          "order": 3
        }, {
          "name": "Symantec Puzzle Ad - Non-Latin version",
          "client": "Godfrey Q & Partners",
          "type": "Localized Flash Hero Ad",
          "tech": ["Flash", "Actionscript", "Tweener", "XML", "Localization", "CSS", "Photoshop"],
          "story": "Part of a series of localized Flash ads developed for Symantec, which I did for an International ad agency. I worked with a producer and designer to conceive the ad, and developed the execution myself. The requirements were quite stringent, as these ads needed to be flexible enough to implement easily in any language. Two versions of each ad were made: one for Latin-based languages, and another for Non-Latin. All text for the ad is read in via an external XML file, and a CSS stylesheet was used to control font size and style variability. All animations were created programmatically (not on the timeline), using the MCTween library. ",
          "link": "http://kenrom-media.s3-website-us-west-1.amazonaws.com/media/symantec_puzzle_ad/non_latin/index.html",
          "images": ["images/symantec_ad_puzzle_non_latin_listing04.jpg", "images/symantec_ad_puzzle_non_latin_listing02.jpg", "images/symantec_ad_puzzle_non_latin_listing03.jpg", "images/symantec_ad_puzzle_non_latin_listing01.jpg", "images/symantec_ad_puzzle_non_latin_listing05.jpg", "images/symantec_ad_puzzle_non_latin_listing06.jpg", "images/symantec_ad_puzzle_non_latin_listing07.jpg", "images/symantec_ad_puzzle_non_latin_listing08.jpg"],
          "order": 4
        }, {
          "name": "Symantec Crossword Ad - Latin Version",
          "client": "Godfery Q & Partners",
          "type": "Localized Flash Hero Ad",
          "tech": ["Flash", "ActionScript", "Tweener", "XML", "Localization", "CSS", "Photoshop"],
          "story": "This crossword ad’s concept was particularly challenging to implement, as it needed to take seemingly random letters and animate them into place programmatically to form short messages –in any language. Ultimately I solved for this by creating pre-randomized character addresses to populate the matrix, then read in an XML file–which would parse each character and assign it an address, then append a string of extra letters to fill in where needed. Granted, the crossword concept itself could only work with Latin-based character sets. Still, a workable Non-Latin version was also made (but the crossword copy was not configurable).",
          "link": "http://kenrom-media.s3-website-us-west-1.amazonaws.com/media/symantec_crossword_ad/wp_landingpage_latin/content/index.html",
          "images": ["images/symantec_ad_crossword_listing01.jpg", "images/symantec_ad_crossword_listing02.jpg", "images/symantec_ad_crossword_listing03.jpg", "images/symantec_ad_crossword_listing04.jpg", "images/symantec_ad_crossword_listing05.jpg", "images/symantec_ad_crossword_listing06.jpg", "images/symantec_ad_crossword_listing07.jpg", "images/symantec_ad_crossword_listing08.jpg"],
          "order": 5
        }, {
          "name": "PowerNet 200 Ethernet Anywhere Video",
          "client": "Monster Products",
          "type": "New Product Demo Video for CES",
          "tech": ["Google Sketchup", "Flash", "ActionScript", "Tweener", "Premiere", "Photoshop"],
          "story": "Sometimes you just have to work with the tools you have in the time you’ve got. I was asked to create a new product demo video for Monster Products’ Sales team for use at the Consumer Electronics Show (CES)–in just four days! There were few existing assets and no production budget to speak of. So I helped write a script and directed a studio session with company voice talent. I also took product shots, then used Google Sketchup to create a floor plan, furnishing it with 3D models from the public domain. Finally, I used Flash and Premiere to composite assets and animate them to the voice- over. The demo was completed on-time and worked out very well for the Sales Team.",
          "link": "http://kenrom-media.s3-website-us-west-1.amazonaws.com/media/PowerNet200_Demo.mp4",
          "images": ["images/powernet400_listing01.jpg", "images/powernet400_listing02.jpg", "images/powernet400_listing03.jpg", "images/powernet400_listing04.jpg", "images/powernet400_listing05.jpg", "images/powernet400_listing06.jpg", "images/powernet400_listing07.jpg"],
          "order": 6
        }, {
          "name": "Baby Injection Teaching Tool",
          "client": "EVEO",
          "type": "Interactive Teaching Tool",
          "tech": ["Flash", "ActionScript", "Photoshop"],
          "story": "This Flash- based interactive teaching tool was a small exercise I created for an international NGO project while contracting with EVEO, a production house focused around clients in the Health Care Industry. The point of it is to help educate health care volunteers on how to properly administer injections. (Hint: 90º is the ideal angle.)",
          "link": "http://kenrom-media.s3-website-us-west-1.amazonaws.com/media/baby_injection/baby_stickin.html",
          "images": ["images/baby_injection_listing01.jpg", "images/baby_injection_listing02.jpg", "images/baby_injection_listing03.jpg", "images/baby_injection_listing04.jpg", "images/baby_injection_listing05.jpg"],
          "order": 7
        }, {
          "name": "Adify Media",
          "client": "Adify Media",
          "type": "SilverStripe-Driven Web Site",
          "tech": ["HTML", "Javascript", "Flash", "CSS", "MySQL", "PHP", "SilverStripe CMS", "Custom Theme"],
          "story": "Adify Media contracted with me to do production work—specifically to create a custom theme of CMS templates for their company, using the SilverStripe Content Management System. Although the company itself has since been acquired, this project is an example of my ability to quickly pick up new technologies and successfully implement them. ",
          "link": "",
          "images": ["images/adify-media_listing01.jpg", "images/adify-media_listing02.jpg", "images/adify-media_listing03.jpg"],
          "order": 8
        }, {
          "name": "Antigravity The 2007 Tour",
          "client": "Antigravity",
          "type": "TV Spot",
          "tech": ["Canon GL2", "Final Cut Pro"],
          "story": "Antigravity’s 2007 Tour was a unique opportunity to shoot and edit a regional TV spot in under a week—while on tour with this dynamic group of athletes and performers. Although I no longer have access to a full-res version of the TV spot, I have included a small Web version as an example of my work with video.  ",
          "link": "http://kenrom-media.s3-website-us-west-1.amazonaws.com/media/antigravity/ag_60c.html",
          "images": ["images/antigravity_listing01.jpg", "images/antigravity_listing02.jpg"],
          "order": 9
        }, {
          "name": "Custom Built Cabinetry Incorporated",
          "client": "Custom Built Cabinetry Incorporated",
          "type": "Small Business Responsive Site integrated with Flickr",
          "tech": ["HTML", "Javascript", "JQuery", "JQueryUI", "Flash", "CSS3", "Canon GL2", "Final Cut Pro", "Google Maps API", "Flickr Gallery API", "Photoshop"],
          "story": "Custom Built Cabinetry Incorporated is an example of a small business site I designed and produced with the specific intention of enabling my client (who is not technically inclined) to easily keep their portfolio of work updated. The site itself is conceived as a responsive Bootstrap/Flickr mashup, using a widget called 'FlickrIt'  to pull content from a Flickr photo account, and has worked out as an ideal solution for my client.",
          "link": "http://cbckailua.com/",
          "images": ["images/cbckailua_listing01.jpg", "images/cbckailua_listing02.jpg", "images/cbckailua_listing03.jpg", "images/cbckailua_listing04.jpg", "images/cbckailua_listing05.jpg", "images/cbckailua_listing06.jpg", "images/cbckailua_listing07.jpg", "images/cbckailua_listing08.jpg", "images/cbckailua_listing09.jpg"],
          "order": 10
        }, {
          "name": "Partners In Design",
          "client": "Partners In Design",
          "type": "Small Business Flash Web Site",
          "tech": ["HTML", "Javascript", "Flash", "CSS", "Canon GL2", "Final Cut Pro", "Google Maps API", "Photoshop"],
          "story": "Partners In Design’s Flash Website is another example of my past work as a design consultant for small businesses. I worked with Wayne Parker personally to establish his company’s online presence–from initial concepts, content creation, through final production. I directed and edited the intro video and produced the site in its entirety as a Single Page Application.",
          "link": "http://kenrom-media.s3-website-us-west-1.amazonaws.com/media/pid/index.html",
          "images": ["images/PID_listing01.jpg", "images/PID_listing02.jpg", "images/PID_listing03.jpg", "images/PID_listing04.jpg"],
          "order": 11
        }
        ];

      for (var i = 0; i < job.length; i++) {

        Werks.insert(job[i]);
      }
    }

    var skill = [
      {
        "name": "Mobile App Production",
        "value": 45
  },
      {
        "name": "HTML5",
        "value": 75
  },
      {
        "name": "CSS3",
        "value": 75
  },
      {
        "name": "Javascript",
        "value": 70
  },
      {
        "name": "Meteor Platform",
        "value": 40
  },
      {
        "name": "MongoDB",
        "value": 35
  },
      {
        "name": "JSON/EJSON",
        "value": 55
  },
      {
        "name": "AngularJS",
        "value": 43
  },
      {
        "name": "NPM, Grunt, Bower, Yeoman",
        "value": 35
  },
      {
        "name": "JQuery",
        "value": 60
  },
      {
        "name": "Blaze",
        "value": 33
  },
      {
        "name": "Greensock Animation Platform",
        "value": 58
  },
      {
        "name": "D3JS",
        "value": 25
  },
      {
        "name": "TypeScript",
        "value": 18
  },
      {
        "name": "Flash Platform",
        "value": 74
  },
      {
        "name": "Responsive UI Design",
        "value": 69
  },
      {
        "name": "Localization",
        "value": 70
  },
      {
        "name": "STYLUS, LESS, SCSS, SASS",
        "value": 65
  },
      {
        "name": "ActionScript",
        "value": 72
  },
      {
        "name": "Flex/Flash BuilderCC",
        "value": 71
  },
      {
        "name": "PHP/MySQL-based CMS\'s",
        "value": 70
  },
      {
        "name": "UX Design",
        "value": 55
  },
      {
        "name": "MODULUS Admin",
        "value": 40
  },
      {
        "name": "Modernizr",
        "value": 38
  },
      {
        "name": "PhotoshopCC",
        "value": 84
  },
      {
        "name": "GIT, Subversion",
        "value": 46
  },
      {
        "name": "NodeJS",
        "value": 55
  },
      {
        "name": "KnockoutJS",
        "value": 28
  },
      {
        "name": "XML",
        "value": 50
  },
      {
        "name": "Video Editing & Production",
        "value": 63
  },
      {
        "name": "AJAX",
        "value": 41
  },
      {
        "name": "AWS S3",
        "value": 40
  },
      {
        "name": "J2EE",
        "value": 25
  }
];

    for (var i = 0; i < skill.length; i++) {

      Skills.insert(skill[i]);
    };

    console.log("Finally, there's..." + Werks.find().count() + " work records on the server.");
    console.log("Finally, There's..." + Skills.find().count() + " skills records on the server.");
  });
};
