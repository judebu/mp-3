import { useNavigate } from 'react-router-dom';

export default function Credits() {
  const navigate = useNavigate();

  return (
    <main>
      <title>Credits | Jude Hosmer's Resume</title>
      <h2>Copyright Notice</h2>
        <br/>
        <hr/>
        <br/>
      <p>
        &copy; 2025 Jude Hosmer. All rights reserved.
        <br/>
        <br/>
        This website and its content are the property of Jude Hosmer and are protected by
        international copyright laws. No part of this site, including text, graphics, logos, or
        design, may be reproduced, distributed, or transmitted in any form without prior written
        permission from the owner.
      </p>
        <br/>
      <button onClick={() => navigate('/')}>
        <span>Return Home</span>
      </button>
    </main>
  );
}