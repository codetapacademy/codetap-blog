const themeButtonList = [...document.querySelectorAll('.theme_button')]
themeButtonList.map(themeButton => themeButton.addEventListener('click', e => {
    document.documentElement.style.setProperty('--color-dark', themeButton.dataset.colorDark)
    document.documentElement.style.setProperty('--color-normal', themeButton.dataset.colorNormal)
}));
// let colorList = {
//     'cascade': {
//     colorNormal: '#95A5A6',
//     colorDark: '#7F8C8D',
//   },
  
//   'zest': {
//     colorNormal: '#E67E22',
//     colorDark: '#D35400',
//   },
  
//   'buttercup': {
//     colorNormal: '#F1C40F',
//     colorDark: '#F39C12',
//   },
  
//   'pickled-bluewood': {
//     colorNormal: '#34495E',
//     colorDark: '#2C3E50',
//   },
  
//   'wisteria': {
//     colorNormal: '#9B59B6',
//     colorDark: '#8E44AD',
//   },
  
//   'shamrock': {
//     colorNormal: '#2ECC71',
//     colorDark: '#27AE60',
//   },
  
//   'mountain-meadow': {
//     colorNormal: '#1ABC9C',
//     colorDark: '#16A085',
//   },
  
//   'curious-blue': {
//     colorNormal: '#3498db',
//     colorDark: '#2980b9',
//   },
  
//   'cinnabar': {
//     colorNormal: '#e74c3c',
//     colorDark: '#c0392b',
//   }
// }