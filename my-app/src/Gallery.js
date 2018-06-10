import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },

});

//idk function to add the images?
/*
function addingImages() {
 for (var i = 1; i <= ; i++) {
     var image = document.createElement("img");
     image.setAttribute("src", "images/" + i + ".jpg");
     document.querySelector(".gallery").appendChild(image);
}
} */


  import zara from '../images/zarawhite.png';
  import asos from '../images/asos.jpg';
  import adidas from '../images/adidassmall.png';

  const tileData = [
    {
      img: zara,
      title: 'Image', //link to source?
      author: 'author',
    },
    {
      img: asos,
      title: 'Image2', //link to source?
      author: 'author2',
    },
  ];

function TitlebarGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}

            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitlebarGridList);
