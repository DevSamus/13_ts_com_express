167. Introdução da seção
 -> https://www.udemy.com/course/typescript-do-basico-ao-avancado-c-react-express/learn/lecture/30243954#overview 

 168. Integração TS + Express
  -> https://www.udemy.com/course/typescript-do-basico-ao-avancado-c-react-express/learn/lecture/30243956#overview
	 
	 -> npm init -y
	    npx tsc --init

		dependencias 
		       dev: npm install @types/express @types/node ts-node-dev typescript --save-dev
		 aplicação: npm install express

 no package.json 
      ↓
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
   ->  "dev": "ts-node-dev --respawn --transpile-only src/app.ts "
  },