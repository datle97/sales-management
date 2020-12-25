const headerStyle = (theme) => ({
  root: {
    flexGrow: 1,
  },
  home: {
    color: theme.palette.primary.main,
  },
  links: {
    "& > *": {
      marginRight: theme.spacing(2),
      fontWeight: 600,
    },
  },
});

export default headerStyle;
