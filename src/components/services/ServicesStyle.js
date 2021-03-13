import styled, { css } from 'styled-components'
import {
    flexColWrap,
    flexRowWrap,
    borderStyle,
    headerSecStyled,
} from 'AppStyled'


export const ServicesWrap = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

export const ServicesRow = styled.div`
    margin: 0 auto;
    width: 95%;
    ${flexColWrap};
`

const servicesHeader = `
    // color: #023E73;
    // color: #035080;
    // color: #730E34;
    // color: #0E4C73;
    font-size: 18px;
`

const servicesImage = `
    margin-bottom: 1.8973rem;
    width: auto;
    height: auto;
`

const servicesBody = `
    background-color: #024959;
    margin: 0 1.3rem;
    text-align: left;
    padding: 1rem;
`

const servicesHeaderSecondary = `
    width: 75%;
    margin-bottom: 0.983rem;

`

export const ButtonServices = styled.button`
    margin-top: 2rem;
    border: 2px solid #027353;
`


export const BrandingBox = styled.div`
    ${flexColWrap};

    h4 {
        ${servicesHeader}
        margin-top: 1.4rem;
        margin-bottom: 1.234rem;
    }

    .services-image {
        ${servicesImage};
    }

    .services-body {
        ${servicesBody};
        color: #ffffff;


        h3 {
            ${servicesHeaderSecondary};
        }


        button {
            margin-top: 2rem;
            border: 2px solid #027353;
        }
    }
`



export const WebDevBox = styled.div`
    ${flexColWrap};

    h4 {
        ${servicesHeader}
        margin-top: 1.4rem;
        margin-bottom: 1.234rem;
    }

    .services-image {
        ${servicesImage};
    }

    .services-body {
        color: #ffffff;
        ${servicesBody};

        h3 {
            ${servicesHeaderSecondary};
        }

        button {
            margin-top: 2rem;
            border: 2px solid #027353;
        }
    }

`


export const ConsultBox = styled.div`
    ${flexColWrap};

    h4 {
        ${servicesHeader}
        margin-top: 1.4rem;
        margin-bottom: 1.234rem;
    }

    .services-image {
        ${servicesImage};
    }

    .services-body {
        ${servicesBody};
        color: #ffffff;


        h3 {
            ${servicesHeaderSecondary};
        }

        button {
            margin-top: 2rem;
            border: 2px solid #027353;
        }
    }
`

export const ScalabilityBox = styled.div`
    ${flexColWrap};

    h4 {
        ${servicesHeader}
        margin-top: 1.4rem;
        margin-bottom: 1.234rem;
    }

    .services-image {
        ${servicesImage};

    }

    .services-body {
        color: #ffffff;
        ${servicesBody};

        h3 {
            ${servicesHeaderSecondary};
        }

        button {
            margin-top: 2rem;
            border: 2px solid #027353;
        }
    }
`

export const DigitalMarketingBox = styled.div`
    ${flexColWrap};

    h4 {
        ${servicesHeader}
        margin-top: 1.4rem;
        margin-bottom: 1.234rem;
    }

    .services-image {
        ${servicesImage};
    }

    .services-body {
        color: #ffffff;
        ${servicesBody};

        h3 {
            ${servicesHeaderSecondary};
        }

        button {
            margin-top: 2rem;
            border: 2px solid #027353;
        }
    }
`

export const PublishingBox = styled.div`
    ${flexColWrap};

    h4 {
        ${servicesHeader}
        margin-top: 1.4rem;
        margin-bottom: 1.234rem;
    }

    .services-image {
        ${servicesImage};
    }

    .services-body {
        color: #ffffff;
        ${servicesBody};

        h3 {
            ${servicesHeaderSecondary};
        }

        button {
            margin-top: 2rem;
            border: 2px solid #027353;
        }
    }
`
