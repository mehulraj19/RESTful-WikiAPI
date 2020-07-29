# RESTful-WikiAPI

In this I have cam accross, what makes an API a API and what are the rules we need to follow and how url formation helps in this. 
I have build a simple RESTful API and has done CRUD operations on both '/mainPage' and '/mainPage/:parameter'. 
This is really helpful since one can directly use this to build a project without being confused on these simple yet powerful operations.

# My Actual Data

This is done when get function is called as: <ins>localhost:3000/articles</ins>
[
    {
        "_id": "5f21c78b323810302bebd7cc",
        "title": "REST",
        "content": "REST stands for REpresentational State Transfer. This is used effectively for building up our very own APIs."
    },
    {
        "_id": "5f21c78b323810302bebd7cf",
        "title": "CSS",
        "content": "CSS stands for Cascading Style Sheets. This is used to style our HTML webPage."
    },
    {
        "_id": "5f21c78b323810302bebd7d2",
        "title": "API",
        "content": "API stands for Application Program interface. This is used to use data from other servers."
    }
]

If we give get function as:localhost:3000/articles/REST 
{
    "_id": "5f21c78b323810302bebd7cc",
    "title": "REST",
    "content": "REST stands for REpresentational State Transfer. This is used effectively for building up our very own APIs."
}

If we give post function as: localhost:3000/articles
*******************************************Here I have given values for the Schema using Postman***************************************
[
    {
        "_id": "5f21c78b323810302bebd7cc",
        "title": "REST",
        "content": "REST stands for REpresentational State Transfer. This is used effectively for building up our very own APIs."
    },
    {
        "_id": "5f21c78b323810302bebd7cf",
        "title": "CSS",
        "content": "CSS stands for Cascading Style Sheets. This is used to style our HTML webPage."
    },
    {
        "_id": "5f21c78b323810302bebd7d2",
        "title": "API",
        "content": "API stands for Application Program interface. This is used to use data from other servers."
    },
    {
        "_id": "5f21c867cdfae02984de2f41",
        "__v": 0
    }
]

If we give put function as: localhost:3000/articles/CSS
************This will make changes in the place in the whole object****************************
This is before put operation:
   {
        "_id": "5f21c78b323810302bebd7cf",
        "title": "CSS",
        "content": "CSS stands for Cascading Style Sheets. This is used to style our HTML webPage."
    }
This is after put operation:
  {
    "_id": "5f21c78b323810302bebd7cf",
    "title": "CSS",
    "content": "CSS stands for Cascading Style Sheets. This is used to style our HTML webPage. One can directly implement this in HTML using style after tag"
}

But if we use patch function: localhost:3000/articles/CSS
*******************************Here we just need to give the data for that element of object that we want to update**************************
This is before operation:
    {
    "_id": "5f21c78b323810302bebd7cf",
    "title": "CSS",
    "content": "CSS stands for Cascading Style Sheets. This is used to style our HTML webPage. One can directly implement this in HTML using style after tag"
}
This is after operation:
  {
    "_id": "5f21c78b323810302bebd7cf",
    "title": "CSS",
    "content": "CSS stands for Cascading Style Sheets. This is used to style our HTML webPage. "
}

Delete functions for both are there. You can directly save this to your PC and can try these!!!
