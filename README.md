# RESTful-WikiAPI

In this I have cam accross, what makes an API a API and what are the rules we need to follow and how url formation helps in this. 
I have build a simple RESTful API and has done CRUD operations on both '/mainPage' and '/mainPage/:parameter'. 
This is really helpful since one can directly use this to build a project without being confused on these simple yet powerful operations.

# My Actual Data

This is done when get function is called as: <ins>localhost:3000/articles</ins><br />
[<br />
    {<br />
        "_id": "5f21c78b323810302bebd7cc",<br />
        "title": "REST",<br />
        "content": "REST stands for REpresentational State Transfer. This is used effectively for building up our very own APIs."<br />
    },<br />
    {<br />
        "_id": "5f21c78b323810302bebd7cf",<br />
        "title": "CSS",<br />
        "content": "CSS stands for Cascading Style Sheets. This is used to style our HTML webPage."<br />
    },<br />
    {<br />
        "_id": "5f21c78b323810302bebd7d2",<br />
        "title": "API",<br />
        "content": "API stands for Application Program interface. This is used to use data from other servers."<br />
    }<br />
]<br />
<br />
If we give get function as:localhost:<ins>3000/articles/REST</ins> <br />
{<br />
    "_id": "5f21c78b323810302bebd7cc",<br />
    "title": "REST",<br />
    "content": "REST stands for REpresentational State Transfer. This is used effectively for building up our very own APIs."<br />
}<br />
<br />
If we give post function as: localhost:<ins>3000/articles</ins><br />
*******************************************Here I have given values for the Schema using Postman***************************************<br />
[<br />
    {<br />
        "_id": "5f21c78b323810302bebd7cc",<br />
        "title": "REST",<br />
        "content": "REST stands for REpresentational State Transfer. This is used effectively for building up our very own APIs."<br />
    },<br />
    {<br />
        "_id": "5f21c78b323810302bebd7cf",<br />
        "title": "CSS",<br />
        "content": "CSS stands for Cascading Style Sheets. This is used to style our HTML webPage."<br />
    },<br />
    {<br />
        "_id": "5f21c78b323810302bebd7d2",<br />
        "title": "API",<br />
        "content": "API stands for Application Program interface. This is used to use data from other servers."<br />
    },<br />
    {<br />
        "_id": "5f21c867cdfae02984de2f41",<br />
        "__v": 0<br />
    }<br />
]<br />
<br />
If we give put function as: localhost:<ins>3000/articles/CSS</ins><br />
*******************************This will make changes in the place in the whole object****************************<br />
This is before put operation:<br />
   {<br />
        "_id": "5f21c78b323810302bebd7cf",<br />
        "title": "CSS",<br />
        "content": "CSS stands for Cascading Style Sheets. This is used to style our HTML webPage."<br />
    }<br />
This is after put operation:<br />
  {<br />
    "_id": "5f21c78b323810302bebd7cf",<br />
    "title": "CSS",<br />
    "content": "CSS stands for Cascading Style Sheets. This is used to style our HTML webPage. One can directly implement this in HTML using style after tag"<br />
}<br />
<br />
But if we use patch function: localhost:<ins>3000/articles/CSS</ins><br />
*******************************Here we just need to give the data for that element of object that we want to update**************************<br />
This is before operation:<br />
    {<br />
    "_id": "5f21c78b323810302bebd7cf",<br />
    "title": "CSS",<br />
    "content": "CSS stands for Cascading Style Sheets. This is used to style our HTML webPage. One can directly implement this in HTML using style after tag"<br />
}<br />
This is after operation:<br />
  {<br />
    "_id": "5f21c78b323810302bebd7cf",<br />
    "title": "CSS",<br />
    "content": "CSS stands for Cascading Style Sheets. This is used to style our HTML webPage. "<br />
}<br />
<br />
****************************Delete functions for both are there. You can directly save this to your PC and can try these!!!<br />
