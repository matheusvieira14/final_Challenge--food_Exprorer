import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;

    main{
        padding: 0 3.6rem;

        section{
            margin-bottom: 1.0rem;

            h1{
                margin-bottom: 2.4rem;
            }

            #buttonsCarousel{
                display: flex;
                align-items: center;

                gap: 5px;

                #carousel{
                    width: 100%;
                    display: flex;
                    overflow-x: auto;
                    scroll-behavior: smooth;
                    gap: 1.6rem; 
                }
                #carousel::-webkit-scrollbar{
                    display: none;
                }
            }
        }
    }

@media (min-width: 1000px) {
    main{
        padding: 0 12.4rem;

        section{
            #buttonsCarousel{
                display: flex;

                #carousel{
                    display: flex;
                    gap: 2.7rem;     
                }
            }
        }
    }
}`;