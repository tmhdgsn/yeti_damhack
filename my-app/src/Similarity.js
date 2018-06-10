import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import 'typeface-roboto';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import placeholder from '../images/imgplaceholder.jpg'
import Buttons from './Buttons';
import asosData  from '../../scraping/meta/asos/asos.json';

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

class Similarity extends Component {
  constructor (props) {
    super(props);
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
      <div className="flex-grid centered">
        <div className="col">
        <form action="/url/to/your/function" method="post" enctype="multipart/form-data">
          Select image to upload:
          <input type="file" name="fileToUpload" id="fileToUpload"/>
          <Button type="submit" value="Upload Image" name="submit" className={this.props.classes.button}>Upload Image</Button>
      </form>

        </div>

          <div className="col cardImage">
              <Card className={this.props.classes.card} >
              <CardContent>
                <img src={this.state.selectedFile == null?placeholder:this.state.selectedFile}  className={this.props.classes.cardImg}/>
              </CardContent>
              </Card>

            </div>
            <Buttons click={this.updateStage} text="Next"></Buttons>
          </div>
    );
  }
}

export default  withStyles(styles)(FileUpload);
