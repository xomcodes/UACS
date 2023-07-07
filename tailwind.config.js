/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        uacs : {
          eneutral: {
           
            3: '#F5F5F6',
            6: 'C1C2C6',
            7: '#8F9198',
            8 : '#5E606A',
            9: '#4A4C58',
            10: '#2C2F3C',
            11 : '#252735',
            900 :'#6F6C90'
          },
          ared: {
            1: '#FCE9E8',
            6: '#E1261C',
            5:'#E64D45',
            7: '#BF2018'
          },
          gray: {
            900 : '#18181B',
            500: '#71717A',
            50:'#F9FAFB'
  
          },

          agreen: {
            7: '#30AD74'
          },

          cneutral:{ 
            7: '#8F8E91'
          },

          wneutral:{
            10 :'#2A332F'
          },

          neutral : {
            3: 'F5F5F5',
            300 : '#EFF0F6',
            9: '#514747'
          },
          
          primary: {
            90: '#54565B',
            70:'#707673'
          },


          ablue: {
            5:'#5C70E3',
          }
        },
        
       
       },



  
       background:{
         uacs : {
          ared: {
            7: '#BF2018'
          },

    
          neutral : {
            300 : '#EFF0F6',
          },

          primary:{
            0:'#F2F2F2'
          }
         }
       },


       

    },
  },
  plugins: [],
}
