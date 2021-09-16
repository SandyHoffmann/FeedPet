export function PaginaAnimal(props) {
    return (
        <div class="container">
           <div class="row">
              <div class="col-md-12">
                 <div id="content" class="content content-full-width">
                    <div class="profile">
                       <div class="profile-header"></div>

                          <div class="profile-header-cover"></div>


                          <div class="profile-header-content">

                             <div class="profile-header-img">
                                <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt=""></img>
                             </div>

                             <div class="profile-header-info">
                                <h4 class="m-t-10 m-b-5">Sean Ngu</h4>
                                <p class="m-b-10">UXUI + Frontend Developer</p>
                                <a href="#" class="btn btn-sm btn-info mb-2">Edit Profile</a>
                             </div>

                          </div>

                          <ul class="profile-header-tab nav nav-tabs">
                             <li class="nav-item"><a href="#profile-post" class="nav-link active show" data-toggle="tab">POSTS</a></li>
                             <li class="nav-item"><a href="#profile-about" class="nav-link" data-toggle="tab">ABOUT</a></li>
                             <li class="nav-item"><a href="#profile-photos" class="nav-link" data-toggle="tab">PHOTOS</a></li>
                             <li class="nav-item"><a href="#profile-videos" class="nav-link" data-toggle="tab">VIDEOS</a></li>
                             <li class="nav-item"><a href="#profile-friends" class="nav-link" data-toggle="tab">FRIENDS</a></li>
                          </ul>

                       </div>
                    </div>

                    <div class="profile-content">

                       <div class="tab-content p-0">

                          <div class="tab-pane fade active show" id="profile-post">

                             <ul class="timeline">
                                <li>

                                   <div class="timeline-time">
                                      <span class="date">today</span>
                                      <span class="time">04:20</span>
                                   </div>

                                   <div class="timeline-icon">
                                      <a href="javascript:;">&nbsp;</a>
                                   </div>

                                   <div class="timeline-body">
                                      <div class="timeline-header">
                                         <span class="userimage"><img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt=""></img></span>
                                         <span class="username"><a href="javascript:;">Sean Ngu</a> <small></small></span>
                                         <span class="pull-right text-muted">18 Views</span>
                                      </div>
                                      <div class="timeline-content">
                                         <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc faucibus turpis quis tincidunt luctus.
                                            Nam sagittis dui in nunc consequat, in imperdiet nunc sagittis.
                                         </p>
                                      </div>
                                      <div class="timeline-likes">
                                         <div class="stats-right">
                                            <span class="stats-text">259 Shares</span>
                                            <span class="stats-text">21 Comments</span>
                                         </div>
                                         <div class="stats">
                                            <span class="fa-stack fa-fw stats-icon">
                                            <i class="fa fa-circle fa-stack-2x text-danger"></i>
                                            <i class="fa fa-heart fa-stack-1x fa-inverse t-plus-1"></i>
                                            </span>
                                            <span class="fa-stack fa-fw stats-icon">
                                            <i class="fa fa-circle fa-stack-2x text-primary"></i>
                                            <i class="fa fa-thumbs-up fa-stack-1x fa-inverse"></i>
                                            </span>
                                            <span class="stats-total">4.3k</span>
                                         </div>
                                      </div>
                                      <div class="timeline-footer">
                                         <a href="javascript:;" class="m-r-15 text-inverse-lighter"><i class="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i> Like</a>
                                         <a href="javascript:;" class="m-r-15 text-inverse-lighter"><i class="fa fa-comments fa-fw fa-lg m-r-3"></i> Comment</a> 
                                         <a href="javascript:;" class="m-r-15 text-inverse-lighter"><i class="fa fa-share fa-fw fa-lg m-r-3"></i> Share</a>
                                      </div>
                                      <div class="timeline-comment-box">
                                         <div class="user"><img src="https://bootdey.com/img/Content/avatar/avatar3.png"></img></div>
                                         <div class="input">
                                            <form action="">
                                               <div class="input-group">
                                                  <input type="text" class="form-control rounded-corner" placeholder="Write a comment..."></input>
                                                  <span class="input-group-btn p-l-10">
                                                  <button class="btn btn-primary f-s-12 rounded-corner" type="button">Comment</button>
                                                  </span>
                                               </div>
                                            </form>
                                         </div>
                                      </div>
                                   </div>

                                </li>
                                <li>

                                   <div class="timeline-time">
                                      <span class="date">yesterday</span>
                                      <span class="time">20:17</span>
                                   </div>

                                   <div class="timeline-icon">
                                      <a href="javascript:;">&nbsp;</a>
                                   </div>
                                   <div class="timeline-body">
                                      <div class="timeline-header">
                                         <span class="userimage"><img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt=""></img></span>
                                         <span class="username">Sean Ngu</span>
                                         <span class="pull-right text-muted">82 Views</span>
                                      </div>
                                      <div class="timeline-content">
                                         <p>Location: United States</p>
                                      </div>
                                      <div class="timeline-footer">
                                         <a href="javascript:;" class="m-r-15 text-inverse-lighter"><i class="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i> Like</a>
                                         <a href="javascript:;" class="m-r-15 text-inverse-lighter"><i class="fa fa-comments fa-fw fa-lg m-r-3"></i> Comment</a> 
                                         <a href="javascript:;" class="m-r-15 text-inverse-lighter"><i class="fa fa-share fa-fw fa-lg m-r-3"></i> Share</a>
                                      </div>
                                   </div>

                                </li>
                                <li>

                                   <div class="timeline-time">
                                      <span class="date">24 February 2014</span>
                                      <span class="time">08:17</span>
                                   </div>

                                   <div class="timeline-icon">
                                      <a href="javascript:;">&nbsp;</a>
                                   </div>

                                   <div class="timeline-body">
                                      <div class="timeline-header">
                                         <span class="userimage"><img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt=""></img></span>
                                         <span class="username">Sean Ngu</span>
                                         <span class="pull-right text-muted">1,282 Views</span>
                                      </div>
                                      <div class="timeline-content">
                                         <p class="lead">
                                            <i class="fa fa-quote-left fa-fw pull-left"></i>
                                            Quisque sed varius nisl. Nulla facilisi. Phasellus consequat sapien sit amet nibh molestie placerat. Donec nulla quam, ullamcorper ut velit vitae, lobortis condimentum magna. Suspendisse mollis in sem vel mollis.
                                            <i class="fa fa-quote-right fa-fw pull-right"></i>
                                         </p>
                                      </div>
                                      <div class="timeline-footer">
                                         <a href="javascript:;" class="m-r-15 text-inverse-lighter"><i class="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i> Like</a>
                                         <a href="javascript:;" class="m-r-15 text-inverse-lighter"><i class="fa fa-comments fa-fw fa-lg m-r-3"></i> Comment</a> 
                                         <a href="javascript:;" class="m-r-15 text-inverse-lighter"><i class="fa fa-share fa-fw fa-lg m-r-3"></i> Share</a>
                                      </div>
                                   </div>

                                </li>
                                <li>

                                   <div class="timeline-time">
                                      <span class="date">10 January 2014</span>
                                      <span class="time">20:43</span>
                                   </div>

                                   <div class="timeline-icon">
                                      <a href="javascript:;">&nbsp;</a>
                                   </div>

                                   <div class="timeline-body">
                                      <div class="timeline-header">
                                         <span class="userimage"><img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt=""></img></span>
                                         <span class="username">Sean Ngu</span>
                                         <span class="pull-right text-muted">1,021,282 Views</span>
                                      </div>
                                      <div class="timeline-content">
                                         <h4 class="template-title">
                                            <i class="fa fa-map-marker text-danger fa-fw"></i>
                                            795 Folsom Ave, Suite 600 San Francisco, CA 94107
                                         </h4>
                                         <p>In hac habitasse platea dictumst. Pellentesque bibendum id sem nec faucibus. Maecenas molestie, augue vel accumsan rutrum, massa mi rutrum odio, id luctus mauris nibh ut leo.</p>
                                         <p class="m-t-20">
                                            <img src="../assets/img/gallery/gallery-5.jpg" alt=""></img>
                                         </p>
                                      </div>
                                      <div class="timeline-footer">
                                         <a href="javascript:;" class="m-r-15 text-inverse-lighter"><i class="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i> Like</a>
                                         <a href="javascript:;" class="m-r-15 text-inverse-lighter"><i class="fa fa-comments fa-fw fa-lg m-r-3"></i> Comment</a> 
                                         <a href="javascript:;" class="m-r-15 text-inverse-lighter"><i class="fa fa-share fa-fw fa-lg m-r-3"></i> Share</a>
                                      </div>
                                   </div>

                                </li>
                                <li>
                                   <div class="timeline-icon">
                                      <a href="javascript:;">&nbsp;</a>
                                   </div>

                                   <div class="timeline-body">
                                      Loading...
                                   </div>

                                </li>
                             </ul>

                          </div>

                       </div>

                    </div>

                 </div>
              </div>
           </div>
);}