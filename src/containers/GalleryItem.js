import React, { Component } from 'react'
import { connect } from 'react-redux';
import Slider from 'react-slick';

import { selectedGallery, clearSelectedGallery } from '../actions';
import { bindActionCreators } from 'redux';


//counter
import Counter from './LikesCounter';


const settings ={
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500
}


class GalleryItem extends Component {

    componentDidMount(){
        this.props.selectedGallery(this.props.match.params.id);
    }

    componentWillUnmount(){
        this.props.clearSelectedGallery();
    }


    renderSlider = ({selected}) => {
        if(selected){
            const gallery= selected[0];
            return(
                <div>
                    <h3>The best of {gallery.artist}</h3>
                    <Slider {...settings}>
                        {gallery.images.map((item,index) => {
                            return(
                                <div key={index} className="slide-item">
                                    <div>
                                        <div
                                        className="image"
                                        style={{background: `url(/images/galleries/${item.img})`}}
                                        ></div>
                                        <div className="description">
                                            <span>{item.desc}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                    <Counter 
                        articleId={gallery.id}
                        section="galleries"
                        type="HANDLE_LIKES_GALLERY"
                        likes={gallery.likes[0]}
                        dislikes={gallery.likes[1]}
                    />
                </div>
            )
        }
    }

  render() {

    const item =this.props.gallery;
    
    return (
      <div className="slide-item-wrap">
        {this.renderSlider(item)}
      </div>
    )
  }
}


function mapStateToProps(state){
    return{
        gallery: state.gallery
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectedGallery, clearSelectedGallery}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GalleryItem);