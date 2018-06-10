import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    width: 300,
    height: 80
  },
  input: {
    display: 'none',
  },
});

function ContainedButtons(props) {
  const { classes, click, text } = props;
  return (
    <div idName='BackButton'>

      <Button variant="contained"  className={classes.button} onClick={click}
      >
        {text}
      </Button>

    </div>
  );
}

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContainedButtons);
