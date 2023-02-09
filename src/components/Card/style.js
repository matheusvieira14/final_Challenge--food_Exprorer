import styled from "styled-components";

export const Container = styled.div`
   width:21.0rem;
   
   display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;
   flex: none;
  
   border-radius:8px;

   padding:2.4rem;
   margin-bottom:1.6rem;
   
   color:${({ theme }) => theme.COLORS.WHITE};
   background-color:${({ theme }) => theme.COLORS.BACKGROUND_CARD};
     
   #favoriteAdd{
       width: 100%;
       height: 0;

       display: flex;
       justify-content: flex-end;
   }

    img{
        width: 8.8rem;
        height: 8.8rem;

        border-radius: 50%;

        margin-bottom:1.2rem;
    }

   span{
        margin-bottom:1.2rem;

        color:${({ theme }) => theme.COLORS.COLOR_PRICE};
   }

   #Buttons-Wrapper{
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;

        gap: 1.4rem;

        #input-Wrapper{
            display: flex;
            align-items:center;
            
            >div{
                width: 5.0rem;
                height: 3.2rem;
                
                background:none; 
                text-align: center;
                 
                input[type="number"]::-webkit-outer-spin-button,
                input[type="number"]::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                }
            }
        }
        
        #buttonAdd{      
           height:3.2rem;
        }
    }

    >h1{
        font-family: 'Poppins';
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 2.4rem;

        margin-bottom:1.2rem;

        color:${({ theme }) => theme.COLORS.WHITE};
    }

@media (min-width: 1000px) {
    width:30.4rem;
    height:46.2rem;

    img{
        width: 17.6rem;
        height: 17.6rem;

        margin-bottom: 1.5rem;
    }

    h1{  
        font-weight: 700;
        font-size: 2.4rem;
        line-height: 100%;

        margin-bottom:1.5rem;
    }

    span{
        font-size: 3.2rem;
        line-height: 100%;

        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
    }

    #Buttons-Wrapper{
        width: 100%;

        display: flex;
        flex-direction: row;
        align-items: center;

        gap: 1.6rem;

        #input-Wrapper{
            height: 4.8rem;

            >div{
                width: 5.0rem;
                height: 3.2rem; 
            }
        }
        #buttonAdd{      
            height:4.8rem;

            border-radius: 5px;
        }
    }    
}`;