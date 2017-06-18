const Index = ({ title, description }) => (
  <div>
    <h1>{title}</h1>
    <p>{description}</p>
  </div>
)

Index.getInitialProps = async () => {
  return {
    'title': 'Reflecar | Aislamiento térmico para vehículos',
    'description': 'Reflecar es un sistema de aislamiento térmico que consigue que en tu coche haga la misma temperatura aparcado al sol que si estuviera aparcado a la sombra.',
    'widgets': [
      {
        'type': 'TextBlock',
        'title': '¿Qué es Reflecar?',
        'slug': 'que-es-reflecar',
        'content': 'Reflecar es un sistema de aislamiento térmico que consigue que en tu coche haga la misma temperatura aparcado al sol que si estuviera aparcado a la sombra.\n\nEl material del que se compone es un aislante técnico reflexivo de varias capas y ultrafino que se coloca sobre el coche con unos soportes y cogidas especiales que no dañan la carrocería.\n\nDispone de varios cogidas que se introducen en las puertas para evitar que se vuele con el viento y además proporciona intimitad y oscuridad para coches y furgonetas camperizados.\n'
      },
      {
        'type': 'TextBlock',
        'title': '¿Para qué sirve?',
        'slug': 'para-que-sirve',
        'content': 'Está especialmente pensado para dos usos:\n- Para vehículos camperizados en zona de mucho calor, en donde a partir de que sale el sol es casi imposible estar en el interior por las altas temperaturas que alcanzan. Con reflecar puesto sobre tu coche o furgoneta podrás dormir todo el día en el interior a menor temperatura que si estuvieras fuera a la sombra.,\n- Para cualquier tipo de vehículo que debas dejar al aparcado al sol (en zonas y temporadas de calor) y que a la vuelta puedas entrar en el coche a una temperatura confortable, sin haber estado recalentado de todo el día.\n'
      },
      {
        'type': 'TextBlock',
        'title': 'Ventajas',
        'slug': 'ventajas',
        'content': '- Proporciona una temperatura confortable dentro de tu coche aparcado a pleno sol.\n- Si tienes el vehiculo camperizado puedes dormir en el interior como si lo estuvieras haciendo a la sombra, además te permite una mayor intimidad y oscuridad.\n- Proporciona una barrera de vapor y buen grado de impermeabilidad por si quieres tener las ventanillas bajadas.\n'
      },
      {
        'type': 'FAQ',
        'title': 'Preguntas Frecuentes (FAQ)',
        'slug': 'faq',
        'faqs': [
          {
            'question': '¿Y si hace mucho viento?',
            'answer': 'No te tienes que preocupar,además de funcionar mejor el aislamiento no saldrá volando debido a las diferentes cogidas que tiene el aislamiento.'
          },
          {
            'question': '¿Dónde lo puedo comprar?',
            'answer': 'Reflecar acaba de nacer, así que por ahora todos los pedidos se deben realizar por nuestra página web.'
          },
          {
            'question': '¿Qué medidas tiene?',
            'answer': 'Por ahora tenemos 3 modelos básicos: Modelo furgoneta (tipo Vito, Transporter): 4,70 x 3,20 m, Modelo combi (tipo Berlingo, Caddy, Partner): 4,00 x 3,05 m, Modelo turismo: 3,40 x 2,40 m. Para otros vehículos o medidas específicas ponte en contacto con nosotros.'
          }
        ]
      }
    ]
  }
}

export default Index
