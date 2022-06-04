import React from 'react';
import './Slideshow.css';

class Slideshow extends React.Component 
{

    constructor(props){
        super(props);
        this.state = {slideIndex: 1, style: ["display: none;","display: none;","display: none;"]};
        this.plusSlides.bind(this);
        this.currentSlide.bind(this);
        this.showSlides.bind(this);
    }

    // Next/previous controls
    plusSlides(n) {
        this.showSlides(this.state.slideIndex += n);
    }

    // Thumbnail image controls
    currentSlide(n) {
        this.showSlides(this.state.slideIndex = n);
    }

    showSlides(n) {
        var i;
        //var dots = document.getElementsByClassName("dot");
        if (n > this.state.style.length) {this.state.slideIndex = 1}
        if (n < 1) {this.state.slideIndex = this.state.style.length}
        for (i = 0; i < this.state.style.length; i++) {
            this.state.style[i] = "display: none;";
        }
        // for (i = 0; i < dots.length; i++) {
        //     dots[i].className = dots[i].className.replace(" active", "");
        // }
        this.state.style[this.state.slideIndex-1] = "display: block;";
        //dots[slideIndex-1].className += " active";
    }

  render ()
  {
    return (
        <div>
           <div class="slideshow-container">

                <div class="mySlides fade" style={this.state.style[0]}>
                    <div class="numbertext">1 / 3</div>
                    <img src="blue-fireball.png"/>
                    <div class="text">Caption Text</div>
                </div>
        
                <div class="mySlides fade" style={this.state.slides[1]}>
                    <div class="numbertext">2 / 3</div>
                    <img src="intershipwill.jpeg"/>
                    <div class="text">Caption Two</div>
                </div>
        
                <div class="mySlides fade" style={this.state.style[2]}>
                    <div class="numbertext">3 / 3</div>
                    <img src="kite.jpg"/>
                    <div class="text">Caption Three</div>
                </div>
                <a class="prev" onclick={this.plusSlides(-1)}>&#10094;</a>
                <a class="next" onclick={this.plusSlides(1)}>&#10095;</a>
            </div>
            <br/>
        
            <div>
                <span class="dot" onclick={this.currentSlide(1)}></span>
                <span class="dot" onclick={this.currentSlide(2)}></span>
                <span class="dot" onclick={this.currentSlide(3)}></span>
            </div> 
        </div>
        
    );
  }
}

export default Slideshow;
