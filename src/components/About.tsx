import React from 'react';
import face from '../img/Face.png';
import styled from 'styled-components';

export const FaceImage = styled.img`
  width: 80px;
`;

const About = () => {
  return (
    <div id="home">
      <table>
        <tbody>
          <tr>
            <td>
              <FaceImage src={face} alt="" />
            </td>
            <td>
              <h2>Arturo Riter</h2>
              <h5>Lead Senior Engineer</h5>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
    </div>
  );
};

export default About;
