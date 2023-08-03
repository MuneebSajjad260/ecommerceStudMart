export default getRandomColor = () => {
  const randomChannel = () => Math.floor(Math.random() * 150) + 100;
  const opacity = 0.3; // Adjust the opacity value (0.0 to 1.0) to set the transparency

  const r = randomChannel();
  const g = randomChannel();
  const b = randomChannel();

  const background = `rgba(${r}, ${g}, ${b}, ${opacity})`;

  // Calculate a darker color for the border
  const darkerR = Math.max(0, r - 30);
  const darkerG = Math.max(0, g - 30);
  const darkerB = Math.max(0, b - 30);
  const borderColor = `rgb(${darkerR}, ${darkerG}, ${darkerB})`;

  return {background, borderColor};
};
