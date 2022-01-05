import { mount } from '@cypress/react'
import Hero from '../../components/Hero'
import ArticleCard from '../../components/ArticleCard'
import Article from '../../components/Article'

describe('Hero', () => {
    it('Renders component', () => {
      mount(<Hero/>)
      cy.contains('Natalia Ballardini')
  })
})

const article = {
  "id": 1,
  "attributes": {
    "name": "Test 1",
    "description": "testtsesttest",
    "price": 100,
    "sold": false,
    "displayimage": {
      "data": {
        "attributes": {
          "url": "/uploads/small_E4709_F85_EB_01_4467_9_DCD_AB_9436_DB_5478_9590f7dbd9.JPG",
          "width": 500,
          "height": 500,
          "formats": {
            "small" : {
              "url": "/uploads/small_E4709_F85_EB_01_4467_9_DCD_AB_9436_DB_5478_9590f7dbd9.JPG",
              "width": 500,
              "height": 500
            }

          }
        }
      }
    },
    "images": {
      "data": [{
        "attributes": {
          "url": "/uploads/small_E4709_F85_EB_01_4467_9_DCD_AB_9436_DB_5478_9590f7dbd9.JPG",
          "width": 500,
          "height": 500
        }},
        {
          "attributes": {
            "url": "/uploads/small_E4709_F85_EB_01_4467_9_DCD_AB_9436_DB_5478_9590f7dbd9.JPG",
            "width": 500,
            "height": 500
          }}
      ]
    },
    "category": {
      "data": {
        "id": 1,
        "attributes": {
          "name": "Skål",
        }
      }
    }
  }
}

const articleSold = {
  "id": 1,
  "attributes": {
    "name": "Test 1",
    "description": "testtsesttest",
    "price": 100,
    "sold": true,
    "displayimage": {
      "data": {
        "attributes": {
          "url": "/uploads/small_E4709_F85_EB_01_4467_9_DCD_AB_9436_DB_5478_9590f7dbd9.JPG",
          "width": 500,
          "height": 500,
          "formats": {
            "small" : {
              "url": "/uploads/small_E4709_F85_EB_01_4467_9_DCD_AB_9436_DB_5478_9590f7dbd9.JPG",
              "width": 500,
              "height": 500
            }

          }
        }
      }
    },
    "images": {
      "data": [{
        "attributes": {
          "url": "/uploads/small_E4709_F85_EB_01_4467_9_DCD_AB_9436_DB_5478_9590f7dbd9.JPG",
          "width": 500,
          "height": 500
        }},
        {
          "attributes": {
            "url": "/uploads/small_E4709_F85_EB_01_4467_9_DCD_AB_9436_DB_5478_9590f7dbd9.JPG",
            "width": 500,
            "height": 500
          }}
      ]
    },
    "category": {
      "data": {
        "id": 1,
        "attributes": {
          "name": "Skål",
        }
      }
    }
  }
}

describe('ArticleCard', () => {
  it('Renders props', () => {
    mount(<ArticleCard article={article}/>)
    cy.contains('Test 1')
    cy.contains('100')
  })

  it('Renders button when sold is false', () => {
    mount(<ArticleCard article={article}/>)
    cy.get('button').contains('Beställ här!')
  })

  it('Renders text when sold is true', () => {
    mount(<ArticleCard article={articleSold}/>)
    cy.get('span').contains('Slutsåld')
  })
})

describe('Article', () => {
  it('Renders props', () => {
    mount(<Article article={article}/>)
    cy.contains('Test 1')
    cy.contains('100')
  })

  it('Renders button when sold is false', () => {
    mount(<Article article={article}/>)
    cy.get('button').contains('Beställ här!')
  })

  it('Renders text when sold is true', () => {
    mount(<Article article={articleSold}/>)
    cy.get('span').contains('Slutsåld')
  })
})