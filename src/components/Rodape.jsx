import Alert from 'react-bootstrap/Alert';

function Rodape() {
  return (
    <>
      {[
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          @Copyright Feminicídio 2023
        </Alert>
      ))}
    </>
  );
}

export default Rodape;