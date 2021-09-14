import {AppTexts} from '../type';

const HomeText = {
  homeTitle: 'NativApps Prueba Técnica',
  homeSubTite1: 'Películas con título ',
  homeSubTite2: 'del año ',
  homeItemType: 'Tipo: ',
  homeItemYear: 'Año: ',
  homeErrorFetch: 'Error al obtener listado. Intente nuevamente.',
  homeAcceptButton: 'Aceptar',
  homeNoData: 'No se ha encontrado resultados.',
};

const AboutText = {
  aboutTitle: 'Prueba Técnica Desarrollo Híbrido - NativeApps',
  aboutUS: 'HU: ',
  aboutName: 'Nombre: ',
  aboutLink: 'Link del repositorio',
};

const es: AppTexts = {
  homeTab: 'Inicio',
  aboutTab: 'Acerca de',
  ...HomeText,
  ...AboutText,
};

export default es;
