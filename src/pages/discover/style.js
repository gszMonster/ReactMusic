import styled from "styled-components";

export const DiscoverWrapper = styled.div`
  
  .top {
    height: 30px;
    box-sizing: border-box;
    border-bottom: 1px solid #a40011;
    background-color: #C20C0C;
  }
  .nav {
    height: 100%;
    padding-left: 180px;
    font-size: 12px;
    display: flex;
    
    a {
      display: block;
      height: 20px;
      color: #fff;

      em {
        height: 20px;
        padding: 0 13px;
        display: inline-block;
        line-height: 20px;
        margin: 2px 17px 0;
      }
    }
    a:hover,a.active {
      text-decoration: none;
      
      em {
        border-radius: 20px;
        background: #980909;
      }

    }
  }
`