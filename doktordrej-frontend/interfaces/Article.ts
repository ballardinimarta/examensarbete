interface IArticle {
        "id": Number,
        "attributes": {
          "name": String,
          "description": String,
          "price": Number,
          "sold": Boolean,
          "publishedAt": String,
          "displayimage": {
            "data": any
          },
          "images": {
            "data": any
          },
          "category": {
            "data": {
              "id": Number,
              "attributes": {
                "name": String,
              }
            }
          }
        }
}
export default IArticle