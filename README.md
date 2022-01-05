## Examensarbete ##

### Scripts ###
```  
"scripts": {
    "frontend": "cd doktordrej-frontend && npm run dev",
    "backend": "cd doktordrej-backend && npm run develop",
    "unittest": "cd doktordrej-frontend && npx cypress open",
    "componenttest": "cd doktordrej-frontend && npx cypress open-ct"
}
```
I have four scripts for running the app and the testing, you write them from the root folder of the project.<br/>
The two testing scripts open up different cypress environments and that is why they are separate.