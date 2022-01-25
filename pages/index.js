// IMPORTA OS COMPONENTES DA LIB SKYNEXUI
import { Box, Button, Text, TextField, Image } from '@skynexui/components';

// IMPORTA OS ESTILOS QUE ESTÃO NO ARQUIVO "config.json"
import appConfig from '../config.json';

// ESTILOS GLOBAIS DA APLICAÇÃO
function GlobalStyle() {
    return (
      <style global jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
        }
        body {
          font-family: 'Open Sans', sans-serif;
        }
        /* App fit Height */ 
        html, body, #__next {
          min-height: 100vh;
          display: flex;
          flex: 1;
        }
        #__next {
          flex: 1;
        }
        #__next > * {
          flex: 1;
        }
      `}</style>
    );
  }

  function Title(props) {
    const Tag = props.tag || 'h1';
    return (
      <>
        <Tag>{props.children}</Tag>
        <style jsx>{`
              ${Tag} {
                  color: ${appConfig.theme.colors.neutrals['100']};
                  font-size: 24px;
                  font-weight: 600;
              }
              `}</style>
      </>
    );
  }
  
// COMPONENTE REACT PADRÃO

  // Componente React
  // function HomePage() {
  //     // JSX
  //     return (
  //         <div>
  //             <GlobalStyle />
  //             <Titulo tag="h2">Boas vindas de volta!</Titulo>
  //             <h2>Discord - Alura Matrix</h2>
  //         </div>
  //     )
  // }
  // export default HomePage
  
  function PaginaInicial() {
    const username = 'Naruto';
  
    return (
      <>
        <GlobalStyle />
        <Box
          styleSheet={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: appConfig.theme.colors.primary[100],
            backgroundImage: 'url(https://spuckpop.com/wp-content/uploads/2020/12/spuckpop.png)',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
          }}
        >
          <Box
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
              width: '100%', maxWidth: '700px',
              borderRadius: '5px', padding: '32px', margin: '16px',
              background: 'rgba( 41, 51, 61, 0.83)',
              boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
              backdropFilter: ( '4.5px' ),
              borderRadius: '10px',
              border: '1px solid rgba( 255, 255, 255, 0.18 )',
            }}
          >
            {/* Formulário */}
            <Box
              as="form"
              styleSheet={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
              }}
            >
              <Title tag="h2">Boas vindas de volta!</Title>
              <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[100] }}>
                {appConfig.name}
              </Text>
  
              <TextField
                fullWidth
                textFieldColors={{
                  neutral: {
                    textColor: appConfig.theme.colors.neutrals[900],
                    mainColor: appConfig.theme.colors.neutrals[100],
                    mainColorHighlight: appConfig.theme.colors.primary[100],
                    backgroundColor: appConfig.theme.colors.neutrals[300],
                  },
                }}
              />
              <Button
                type='submit'
                label='Entrar'
                fullWidth
                buttonColors={{
                  contrastColor: appConfig.theme.colors.neutrals["100"],
                  mainColor: appConfig.theme.colors.primary[500],
                  mainColorLight: appConfig.theme.colors.primary[100],
                  mainColorStrong: appConfig.theme.colors.primary[400],
                }}
              />
            </Box>
            {/* Formulário */}
  
  
            {/* Photo Area */}
            <Box
              styleSheet={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '200px',
                padding: '16px',
                backgroundColor: appConfig.theme.colors.primary[500],
                border: '1px solid',
                borderColor: appConfig.theme.colors.neutrals[200],
                borderRadius: '10px',
                flex: 1,
                minHeight: '240px',
              }}
            >
              <Image
                styleSheet={{
                  borderRadius: '50%',
                  marginBottom: '16px',
                }}
                src={`https://i.pinimg.com/736x/89/f3/e6/89f3e629db7ea5010c3b2deaec8c7f6c.jpg`}
              />
              <Text
                variant="body4"
                styleSheet={{
                  color: appConfig.theme.colors.neutrals[800],
                  backgroundColor: appConfig.theme.colors.neutrals[100],
                  padding: '3px 10px',
                  borderRadius: '1000px'
                }}
              >
                {username}
              </Text>
            </Box>
            {/* Photo Area */}
          </Box>
        </Box>
      </>
    );
  }

  export default PaginaInicial