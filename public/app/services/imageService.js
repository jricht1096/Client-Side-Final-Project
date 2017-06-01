var imageService = angular.module('imageService',[]);
imageService.factory('imageService', function(){
    something = {};
    something.myName = "jricht1096";
    something.userInfo=[
        {"name":"Jonathan","userID":"jricht1096","profilePic":"https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-1/p160x160/12993522_1393628543988040_917209805180670586_n.jpg?oh=9001d5b3ce6c4f879e3815ca7ae3c794&oe=5804FB0E"},
        {"name":"zack","userID":"zack","profilePic":"https://sp.yimg.com/xj/th?id=OIP.M0a5c6a56bc78f1e5120f2a90fda7fe17H2&pid=15.1&P=0&w=300&h=300"}];
    
    something.posts=[{
        "owner":"jricht1096",
            "caption":"Park",
            "image":"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRQ0w3SaC4fvhvqM_d4j0rFcY94L2Lgy0YQvRkFHuWeMLZoE0o",
            "content" :"I stole this pic from google",
            "numberOfLikes": 4,
            "comments":[
                { "commentor":"ZackTheSailor",
                 "comment" :"do et 4 da lols",
                 "hashtags" :"#freakyLanguage"
                },
                {
                    "commentor":"KingJordan",
                    "comment":"I shalt name thee as my legion",
                    "hashtags":"#legionDeHonor"
                }
            ]
         },
          {
              "owner":"jricht1096",
            "caption":"Mountain Side River",
            "image":"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRJkZYCagzKl8sWejl8tr-d3sjkgsVcl7BfL_J52Or4rnaRwyt-",
            "content" :"I stole this pic from google",
            "numberOfLikes": 4,
            "comments":[
                { "commentor":"ZackTheSailor",
                 "comment" :"do et 4 da lols",
                 "hashtags" :"#freakyLanguage"
                },
                {
                    "commentor":"KingJordan",
                    "comment":"I shalt name thee as my legion",
                    "hashtags":"#legionDeHonor"
                }
            ]
         },
          {
              "owner":"jricht1096",
            "caption":"Shy Bear",
            "image":"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSHr2d9IDyo6X2t6a-Av45LlctkCZSzZbWUouDaVGnlmmDIBkCrTw",
            "content" :"I stole this pic from google",
            "numberOfLikes": 4,
            "comments":[
                { "commentor":"ZackTheSailor",
                 "comment" :"do et 4 da lols",
                 "hashtags" :"#freakyLanguage"
                },
                {
                    "commentor":"KingJordan",
                    "comment":"I shalt name thee as my legion",
                    "hashtags":"#legionDeHonor"
                }
            ]
         },
          {
              "owner":"jricht1096",
            "caption":"Sitting Fox",
            "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDZPv-chjmwlxTgJ_vJefC3O8V7AQ1T4PTesHjkNIoyXeY-n0slA",
            "content" :"I stole this pic from google",
            "numberOfLikes": 4,
            "comments":[
                { "commentor":"ZackTheSailor",
                 "comment" :"do et 4 da lols",
                 "hashtags" :"#freakyLanguage"
                },
                {
                    "commentor":"KingJordan",
                    "comment":"I shalt name thee as my legion",
                    "hashtags":"#legionDeHonor"
                }
            ]
         },
          {
              "owner":"jricht1096",
            "caption":"Sunsetting Forest",
            "image":"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS5Vkp8djMojaRiU89gxu_Zxiv36ZRvlwxEjWBdZvEhaXJ231iRlA",
            "content" :"I stole this pic from google",
            "numberOfLikes": 4,
            "comments":[
                { "commentor":"ZackTheSailor",
                 "comment" :"do et 4 da lols",
                 "hashtags" :"#freakyLanguage"
                },
                {
                    "commentor":"KingJordan",
                    "comment":"I shalt name thee as my legion",
                    "hashtags":"#legionDeHonor"
                }
            ]
         },
          {
              "owner":"jricht1096",
            "caption":"Marsh",
            "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ZUmeNfTyNoI-9GgBu7rTt4xd7sH4VChEhG6tVm98GCeYcYSoCg",
            "content" :"I stole this pic from google",
            "numberOfLikes": 4,
            "comments":[
                { "commentor":"ZackTheSailor",
                 "comment" :"do et 4 da lols",
                 "hashtags" :"#freakyLanguage"
                },
                {
                    "commentor":"KingJordan",
                    "comment":"I shalt name thee as my legion",
                    "hashtags":"#legionDeHonor"
                }
            ]
         },
          {
              "owner":"jricht1096",
            "caption":"Crooked Forest Path",
            "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4trA0mIHPhXzgsslu5umg2n8TOTFSWDbwdE7FgHmbI-E3ubIUGw",
            "content" :"I stole this pic from google",
            "numberOfLikes": 4,
            "comments":[
                { "commentor":"ZackTheSailor",
                 "comment" :"do et 4 da lols",
                 "hashtags" :"#freakyLanguage"
                },
                {
                    "commentor":"KingJordan",
                    "comment":"I shalt name thee as my legion",
                    "hashtags":"#legionDeHonor"
                }
            ]
         },
          {
              "owner":"jricht1096",
            "caption":"Canyon River",
            "image":"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRTYBg0brTzUH6-Jewy8RYTGBYcOg0mGZzMknP30459cMUbKTwL",
            "content" :"I stole this pic from google",
            "numberOfLikes": 4,
            "comments":[
                { "commentor":"ZackTheSailor",
                 "comment" :"do et 4 da lols",
                 "hashtags" :"#freakyLanguage"
                },
                {
                    "commentor":"KingJordan",
                    "comment":"I shalt name thee as my legion",
                    "hashtags":"#legionDeHonor"
                }
            ]
         },
          {
              "owner":"jricht1096",
            "caption":"Mountain Lake",
            "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSJd3BV5SNBsJWES3fUuQejj1clAjxyefzPBPdmRPR9bhsCL83",
            "content" :"I stole this pic from google",
            "numberOfLikes": 4,
            "comments":[
                { "commentor":"ZackTheSailor",
                 "comment" :"do et 4 da lols",
                 "hashtags" :"#freakyLanguage"
                },
                {
                    "commentor":"KingJordan",
                    "comment":"I shalt name thee as my legion",
                    "hashtags":"#legionDeHonor"
                }
            ]
         },
          {
              "owner":"jricht1096",
            "caption":"Simple Forest",
            "image":"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ2iCYFRmEUL_1LJiuc1TUWQ_1l2Lkna2sOAJzYhG-mBDNQyft3BQ",
            "content" :"I stole this pic from google",
            "numberOfLikes": 4,
            "comments":[
                { "commentor":"ZackTheSailor",
                 "comment" :"do et 4 da lols",
                 "hashtags" :"#freakyLanguage"
                },
                {
                    "commentor":"KingJordan",
                    "comment":"I shalt name thee as my legion",
                    "hashtags":"#legionDeHonor"
                }
            ]
         },
           {
              "owner":"jricht1096",
            "caption":"Harbor Channel Through Reef",
            "image":"https://tse3.mm.bing.net/th?id=OIP.M56e501f47cbe22c05a3a745c6bc68cd5o0&pid=15.1&P=0&w=300&h=300",
            "content" :"I stole this pic from google",
            "numberOfLikes": 4,
            "comments":[
                { "commentor":"ZackTheSailor",
                 "comment" :"do et 4 da lols",
                 "hashtags" :"#freakyLanguage"
                },
                {
                    "commentor":"KingJordan",
                    "comment":"I shalt name thee as my legion",
                    "hashtags":"#legionDeHonor"
                }
            ]
         },
            {
              "owner":"jricht1096",
            "caption":"Ruby Ring",
            "image":"https://tse4.mm.bing.net/th?id=OIP.Mafef8eab587a801c5d2130a2156e8e1fo0&pid=15.1&P=0&w=300&h=300",
            "content" :"I stole this pic from google",
            "numberOfLikes": 4,
            "comments":[
                { "commentor":"ZackTheSailor",
                 "comment" :"do et 4 da lols",
                 "hashtags" :"#freakyLanguage"
                },
                {
                    "commentor":"KingJordan",
                    "comment":"I shalt name thee as my legion",
                    "hashtags":"#legionDeHonor"
                }
            ]
         },
          {
              "owner":"jricht1096",
            "caption":"Ocean View",
            "image":"https://tse3.mm.bing.net/th?id=OIP.M7965feb63057da0bf2090237480d6c1do0&pid=15.1&P=0&w=300&h=300",
            "content" :"I stole this pic from google",
            "numberOfLikes": 4,
            "comments":[
                { "commentor":"ZackTheSailor",
                 "comment" :"do et 4 da lols",
                 "hashtags" :"#freakyLanguage"
                },
                {
                    "commentor":"KingJordan",
                    "comment":"I shalt name thee as my legion",
                    "hashtags":"#legionDeHonor"
                }
            ]
         },
          {
              "owner":"jricht1096",
            "caption":"Connections",
            "image":"https://tse4.mm.bing.net/th?id=OIP.Ma928d9d6019cb0637d4bf63dd953b1afo0&pid=15.1&P=0&w=300&h=300",
            "content" :"I stole this pic from google",
            "numberOfLikes": 4,
            "comments":[
                { "commentor":"ZackTheSailor",
                 "comment" :"do et 4 da lols",
                 "hashtags" :"#freakyLanguage"
                },
                {
                    "commentor":"KingJordan",
                    "comment":"I shalt name thee as my legion",
                    "hashtags":"#legionDeHonor"
                }
            ]
         },
          {
              "owner":"jricht1096",
            "caption":"Glacier",
            "image":"https://tse4.mm.bing.net/th?id=OIP.M8ae4d31d2fe74ea525fff98ba5bf41f1o0&pid=15.1&P=0&w=300&h=300",
            "content" :"I stole this pic from google",
            "numberOfLikes": 4,
            "comments":[
                { "commentor":"ZackTheSailor",
                 "comment" :"do et 4 da lols",
                 "hashtags" :"#freakyLanguage"
                },
                {
                    "commentor":"KingJordan",
                    "comment":"I shalt name thee as my legion",
                    "hashtags":"#legionDeHonor"
                }
            ]
         },
          {
              "owner":"jricht1096",
            "caption":"Rock Garden and Bridge",
            "image":"https://tse4.mm.bing.net/th?id=OIP.Mf4f476aecc3e44080ab148602f73e18do0&pid=15.1&P=0&w=300&h=300",
            "content" :"I stole this pic from google",
            "numberOfLikes": 4,
            "comments":[
                { "commentor":"ZackTheSailor",
                 "comment" :"do et 4 da lols",
                 "hashtags" :"#freakyLanguage"
                },
                {
                    "commentor":"KingJordan",
                    "comment":"I shalt name thee as my legion",
                    "hashtags":"#legionDeHonor"
                }
            ]
         }
              
          ];
    console.log(something.myName);
    
    return something;
    
});
