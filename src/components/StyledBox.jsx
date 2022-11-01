
import styled from 'styled-components';
export const StyledBox = styled.div`
    background: ${props => props.bgColor};
    width: ${props => props.size ? props.size+"px" : '100px'};
    height: ${props =>  props.size ? props.size+"px" : '100px'};
`;


