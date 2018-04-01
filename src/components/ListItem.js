import React, {Component} from 'react';
import {Text, TouchableWithoutFeedback, View, LayoutAnimation} from 'react-native';
import {connect} from 'react-redux';

import {CardSection} from "./common";
import * as actions from '../actions';

class ListItem extends Component {
    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription = () => {

        const {library, selectedLibraryId} = this.props;
        if (library.id === selectedLibraryId) {
            return (
                <CardSection>
                    <Text>{library.description}</Text>
                </CardSection>
            )
        }
    }

    render() {
        const {titleStyle} = styles;
        const {id, title} = this.props.library;
        console.log(this.props)
        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>{title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }

}
// const mapDispatchToProps = dispatch => {
//
//     return {
//         listItemAction: () => {
//               dispatch(selectLibrary())
//         }
//     }
// }
const mapStateToProps = state => {
    return {
        selectedLibraryId: state.selectedLibraryId
    }
}

export default connect(mapStateToProps, actions)(ListItem);
// export default  ListItem