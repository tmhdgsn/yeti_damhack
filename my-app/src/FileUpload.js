import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import 'typeface-roboto';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
   flexGrow: 1,
  },
  button: {
    margin: theme.spacing.unit,
    width: 300,
    height: 80
  },
  input: {
    display: 'none',
  },
  card: {
    maxWidth: 350,
  },
  cardImg: {
    width: 300,
  },
});

class FileUpload extends Component {
  constructor (props) {
    super(props);
    this.state = {selectedFile: null};
    this.uploadHandler = this.uploadHandler.bind(this);
    this.fileChangedHandler = this.fileChangedHandler.bind(this);

  }
  fileChangedHandler = (event) => {
    // Assuming only image
    var file = this.refs.file.files[0];
    var reader = new FileReader();
    var url = reader.readAsDataURL(file);

     reader.onloadend = function (e) {
        this.setState({selectedFile: [reader.result]})
      }.bind(this);
    console.log(url) // Would see a path?
    // TODO: concat files  }
  }

  uploadHandler = () => {
    console.log(this.state.selectedFile)
  }

  render() {
    return (
        <Grid container spacing={24}>
          <Grid item xs={12}>
              <input ref="file" type="file" multiple accept="image/*" onChange={this.fileChangedHandler} id="contained-button-file" />
              <label htmlFor="contained-button-file">
                <Button onClick={this.uploadHandler} variant="contained" component="span" className={this.props.classes.button} >
                  Upload a photo
                </Button>
              </label>
          </Grid>
          <Grid item xs={12}>
            {this.state.selectedFile && <div>
              <Card className={this.props.classes.card} >
              <CardContent>
                <img src={this.state.selectedFile}  className={this.props.classes.cardImg}/>
              </CardContent>
              </Card>
            </div>}
          </Grid>
        </Grid>
    );
  }
}

export default  withStyles(styles)(FileUpload);
