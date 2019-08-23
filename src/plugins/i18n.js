import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  'en': {
    'subtitle': 'Using computer vision to identify and count mosquito eggs.',
    'description': "This is a proof-of-concept web app to develop a way to algorithmically detect mosquito eggs and egg cluster on ovitrap paper using computer vision. Try out the app using the 'demo' image -- or check out the guide for more information.",
    'Select Image': 'Select Image',
    'Demo Image': 'Demo Image',
    'Select the ovitrap image type': 'Select the ovitrap image type',
    'Paper Strip': 'Paper Strip',
    'Paper-Description': 'Ovitrap paper is rectangular in shape (approx. 32cm X 8cm), on white pellon fabric with gray-black mosquito eggs.',
    'Magnified': 'Magnified',
    'Magnified-Description': 'Ovitrap paper is less narrow than a paper strip, on white pellon fabric with gray-black mosquito eggs that appear larger in the image.',
    'Microscope': 'Microscope',
    'Microscope-Description': 'Image is square, and mosquito eggs are clearly visible as large objects.',
    'Rotate': 'Rotate',
    'Remove': 'Remove',
    'Analyze': 'Analyze',
    'Analyzing Image...': 'Analyzing Image...',
    'Filters': 'Filters',
    'Image Threshold Adjustment': 'Image Threshold Adjustment',
    'Image Threshold Adjustment Details': 'Use this slider to separate background image "noise" and scan for just the eggs.',
    'Minimum Egg Size': 'Minimum Egg Size',
    'Minimum Egg Size Details': "The minimum (smallest single egg) radius for the algorithm — anything smaller will be 'grayed out' and not calculated.",
    'Maximum Egg Size': 'Maximum Egg Size',
    'Maximum Egg Size Details': 'The maximum radius for the eggs — anything larger will be considered a cluster.',
    'Maximum Cluster Size': 'Maximum Cluster Size',
    'Maximum Cluster Size Details': 'The maximum radius for the cluster of eggs — anything larger will be discarded.',
    'Egg Size Scale': 'Egg Size Scale',
    'Egg Size Scale Details': 'Use these sliders to set the minimum (smallest single egg) radius for the algorithm.',
    'Too Large / Too Small': 'Too Large / Too Small',
    'Reset': 'Reset',
    'of': 'of',
    'Source Image': 'Source Image',
    'Threshold': 'Threshold',
    'Detected Objects': 'Detected Objects',
    'Sorted Markers': 'Sorted Markers',
    'Outlined Overlay': 'Outlined Overlay',
    'Analysis': 'Analysis',
    'Details': 'Details',
    'Single Eggs': 'Single Eggs',
    'Calculated from Clusters': 'Calculated from Clusters',
    'Total Egg Estimation': 'Total Egg Estimation',
    'Total Single Egg Area': 'Total Single Egg Area',
    'Single Egg Average Size': 'Single Egg Average Size',
    'Egg Clusters': 'Egg Clusters',
    'Total Egg Clusters Area': 'Total Egg Clusters Area',
    'Average Cluster Area': 'Average Cluster Area',
    'Average Eggs per Cluster': 'Average Eggs per Cluster',
    'Image Size': 'Image Size',
    'Close': 'Close',
    'Compare': 'Compare',
    'Show Filters': 'Show Filters'
  },
  'es': {
    'subtitle': 'Uso de la visión por ordenador para identificar y contar los huevos de mosquitos.',
    'description': "Esta es una aplicación web de prueba de concepto para desarrollar una forma de detectar de forma algorítmica los huevos de mosquitos y los conglomerados de huevos en papel ovitrap mediante visión artificial. Pruebe la aplicación utilizando la imagen 'demo' o consulte la guía para obtener más información.",
    'Select Image': 'Seleccionar Imagen',
    'Demo Image': 'Imagen Demo',
    'Select the ovitrap image type': 'Seleccione el tipo de imagen ovitrap',
    'Paper Strip': 'Tira de Papel',
    'Paper-Description': 'El papel Ovitrap es de forma rectangular (aprox. 32 cm X 8 cm), sobre tela de pellón blanco con huevos de mosquito negro grisáceo.',
    'Magnified': 'Magnificada',
    'Magnified-Description': 'El papel Ovitrap es menos estrecho que una tira de papel, sobre tela de pellon blanco con huevos de mosquito gris-negro que aparecen más grandes en la imagen.',
    'Microscope': 'Microscopio',
    'Microscope-Description': 'La imagen es cuadrada y los huevos de mosquito son claramente visibles como objetos grandes.',
    'Rotate': 'Girar',
    'Remove': 'Retirar',
    'Analyze': 'Analizar',
    'Analyzing Image...': 'Analizando Imagen...',
    'Filters': 'Filtros',
    'Image Threshold Adjustment': 'Ajuste del umbral de imagen',
    'Image Threshold Adjustment Details': 'Use este control deslizante para separar el "ruido" de la imagen de fondo y escanee solo los huevos.',
    'Minimum Egg Size': 'Tamaño Mínimo del Huevo',
    'Minimum Egg Size Details': "El radio mínimo (el huevo individual más pequeño) para el algoritmo; cualquier cosa más pequeña se 'atenuará' y no se calculará.",
    'Maximum Egg Size': 'Tamaño Máximo del Huevo',
    'Maximum Egg Size Details': 'El radio máximo para los huevos: cualquier cosa más grande se considerará un racimo.',
    'Maximum Cluster Size': 'Tamaño máximo del Clúster',
    'Maximum Cluster Size Details': 'El radio máximo para el racimo de huevos: todo lo más grande se descartará.',
    'Egg Size Scale': 'Escala de Tamaño de Huevo',
    'Egg Size Scale Details': 'Use estos controles deslizantes para establecer el radio mínimo (el huevo más pequeño) para el algoritmo.',
    'Too Large / Too Small': 'Demasiado Grande / Demasiado Pequeño',
    'Reset': 'Reiniciar',
    'of': 'de',
    'Source Image': 'Fuente de Imagen',
    'Threshold': 'Límite',
    'Detected Objects': 'Objetos Detectados',
    'Sorted Markers': 'Marcadores Ordenados',
    'Outlined Overlay': 'Superposición Delineada',
    'Analysis': 'Análisis',
    'Details': 'Detalles',
    'Single Eggs': 'Huevos individuales',
    'Calculated from Clusters': 'Calculado a partir de clusters',
    'Total Egg Estimation': 'Estimación Total del Huevo',
    'Total Single Egg Area': 'Área Total de un Solo Euevo',
    'Single Egg Average Size': 'Tamaño Promedio de un Solo Huevo',
    'Egg Clusters': 'Racimos de Huevo',
    'Total Egg Clusters Area': 'Área Total de Racimos de Huevos',
    'Average Cluster Area': 'Área Promedio del Clúster',
    'Average Eggs per Cluster': 'Promedio de Huevos por Racimo',
    'Image Size': 'Tamaño de la Imagen',
    'Close': 'Cerca',
    'Compare': 'Comparar',
    'Show Filters': 'Mostrar Filtros'
  }
}

const i18n = new VueI18n({
  locale: 'en', // set locale
  fallbackLocale: 'es', // set fallback locale
  messages // set locale messages
})

export default i18n
