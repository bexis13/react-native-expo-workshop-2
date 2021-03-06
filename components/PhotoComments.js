import React, { PropTypes } from 'react';
import { View, ScrollView,
         StyleSheet } from 'react-native';
import PhotoComment from './PhotoComment';
import CommentForm from './CommentForm';
import photoComments from '../data/photoComments.json';

class PhotoComments extends React.Component {
  constructor(props) {
    super(props);

    this.state = { comments: [] };

    this.addComment = this.addComment.bind(this);
  }

  componentWillMount() {
    this.setState({
      comments: photoComments,
    });
  }

  addComment(comment) {
    /**
      YOUR ASSIGNMENT:
        Include a new comments to the comments list.
    */
  }

  renderComments() {
    return this.state.comments.map(comment =>
      <PhotoComment
        key={comment.id}
        comment={comment}
      />,
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.renderComments()}
        </ScrollView>

        <CommentForm
          allComments={this.state.comments}
          addComment={this.addComment}
        />
      </View>
    );
  }
}

PhotoComments.propTypes = {
  comment: PropTypes.object,
};

const styles = StyleSheet.create({
  noPhotos: {
    color: '#AAA',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 30,
  },

  container: {
    flex: 1,
  },
});

export default PhotoComments;
