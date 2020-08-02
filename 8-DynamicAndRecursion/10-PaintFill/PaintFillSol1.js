let screen = [[1,1,1,0,0,1,1,1],
              [1,1,1,1,1,1,1,1],
              [1,1,0,0,0,0,1,1],
              [1,1,0,0,0,0,1,0],
              [1,1,0,0,0,0,1,0],
              [1,1,0,0,0,0,1,1],
              [1,1,0,0,0,0,1,1],
              [1,0,1,1,1,1,0,1],
            ];
const paintFill = (screen, r, c, nColor, oColor) => {
  if (r < 0 || c < 0 || r > screen.length || c > screen[0].length || screen[r][c] !== oColor) return;

  screen[r][c] = nColor;

  paintFill(screen, r-1, c, nColor, oColor);
  paintFill(screen, r+1, c, nColor, oColor);
  paintFill(screen, r, c-1, nColor, oColor);
  paintFill(screen, r, c+1, nColor, oColor);
}

paintFill(screen, 4, 4, 3, 0);
screen.forEach(row => console.log(row.join('')));