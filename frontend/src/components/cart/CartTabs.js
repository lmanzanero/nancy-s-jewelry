import React from 'react'

export default function CartTabs() {
  return (
    <div className="container-tabs">
        <input type="radio" id="tab1" name="tab" checked/>
          <label for="tab1"><i class="fa fa-code"></i> Features</label>
          <input type="radio" id="tab2" name="tab"/>
          <label for="tab2"><i class="fa fa-history"></i> History</label>
          <input type="radio" id="tab3" name="tab"/>
          <label for="tab3"><i class="fa fa-pencil"></i> Reviews</label>
          <input type="radio" id="tab4" name="tab"/>
          <label for="tab4"><i class="fa fa-share-alt"></i> Share</label>
          <div class="line"></div>
          <div class="content-container">
            <div class="content" id="c1">
              <h3>Features</h3>
              <p>There really are a lot of features.</p>
            </div>
            <div class="content" id="c2">
              <h3>History</h3>
              <p>The project started in 2018 when someone needed something.</p>
            </div>
            <div class="content" id="c3">
              <h3>Reviews</h3>
              <p>Amazing product. I don't know how it works.</p>
              <i>- Anonymous</i>
            </div>
            <div class="content" id="c4">
              <h3>Share</h3>
              <p>This product is currently not shareable.</p>
            </div>
          </div>
    </div>
  )
}
