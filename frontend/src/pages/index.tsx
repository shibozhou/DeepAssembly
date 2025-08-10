import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Container, Typography, Button, Box } from '@mui/material';

const CodeEditor = dynamic(() => import('../components/CodeEditor'), {
  ssr: false,
});

export default function Home() {
  const [code, setCode] = useState('// Enter your C function here\n');
  const [isOptimizing, setIsOptimizing] = useState(false);

  const handleOptimize = async () => {
    setIsOptimizing(true);
    try {
      // TODO: Call optimization API
      console.log('Optimizing code:', code);
    } finally {
      setIsOptimizing(false);
    }
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          DeepAssembly Code Optimizer
        </Typography>
        
        <Box sx={{ height: 400, my: 2 }}>
          <CodeEditor value={code} onChange={setCode} />
        </Box>
        
        <Button 
          variant="contained" 
          onClick={handleOptimize}
          disabled={isOptimizing}
        >
          {isOptimizing ? 'Optimizing...' : 'Optimize Code'}
        </Button>
      </Box>
    </Container>
  );
}