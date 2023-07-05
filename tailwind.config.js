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
            7: '#8F9198',
            8 : '#5E606A',
            9: '#4A4C58',
            10: '#2C2F3C',
            11 : '#252735',
            900 :'#6F6C90'
          },
          ared: {
            5:'#E64D45',
            7: '#BF2018'
          },
          gray: {
            900 : '#18181B',
            500: '#71717A'
  
          },

          wneutral:{
            10 :'#2A332F'
          },
  
        }
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
