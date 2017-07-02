export default fullPathToComponent =>
  () => System.import(`@/pages/${fullPathToComponent}.vue`);
