(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/article/comment"],{5978:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={loading:function(){return n.e("components/loading/loading").then(n.bind(null,"0ab6"))}},o=function(){var t=this,e=t.$createElement;t._self._c},a=[]},"883d":function(t,e,n){"use strict";var i=n("ae0c"),o=n.n(i);o.a},"8db8":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=function(){n.e("components/loading/pageLoading").then(function(){return resolve(n("471e"))}.bind(null,n)).catch(n.oe)},o=function(){n.e("components/iconfont/iconfont").then(function(){return resolve(n("db8f"))}.bind(null,n)).catch(n.oe)},a=function(){n.e("components/loading/loading").then(function(){return resolve(n("0ab6"))}.bind(null,n)).catch(n.oe)},s={components:{pageLoading:i,loading:a,iconfont:o},data:function(){return{id:0,info:{comment:{count:0,list:[]}},showAddComment:!1,addCommentFocus:!1,commentContent:"",replyCommentId:0,replyNickname:"",page_index:1,page_size:10,hasMoreData:!1,showPageLoading:!0}},onShow:function(){this.$initPageTitle(),this.page_index>1&&(this.page_index=1,this.getComment())},onLoad:function(t){t.article_id>0&&(this.id=t.article_id),this.getComment()},onPullDownRefresh:function(){t.showLoading({title:"刷新中"}),this.page_index=1,this.getComment()},onReachBottom:function(){console.log(this.hasMoreData),this.hasMoreData&&this.getComment()},methods:{getComment:function(){var e=this;this.$app.request({url:this.$api.article.comment,data:{article_id:this.id,page_index:this.page_index,page_size:this.page_size},method:"POST",dataType:"json",success:function(n){0==n.code?(console.log(e.info.comment),1==e.page_index&&(e.info.comment.list=[],e.info.comment.count=0),e.info.comment.list=e.info.comment.list.concat(n.data.list),e.info.comment.count=n.data.count,console.log(n.data.count),t.setNavigationBarTitle({title:"全部评论("+n.data.count+")"}),e.$initPageTitle(),e.showPageLoading=!1,n.data.page>e.page_index?e.hasMoreData=!0:e.hasMoreData=!1,e.page_index+=1):e.$alert(n.msg)},complete:function(e){t.stopPullDownRefresh(),t.hideLoading()}})},like:function(){var t=this;this.$app.request({url:this.$api.article.like,data:{article_id:this.id},method:"POST",dataType:"json",success:function(e){if(console.log("res"),0==e.code){t.info.is_like=!t.info.is_like;var n=t.info.is_like?"点赞成功":"已取消点赞";t.$alert(n,"success")}else t.$alert(e.msg,"warning")}})},commentLike:function(t,e){var n=this;this.$app.request({url:this.$api.article.commentLike,data:{comment_id:t},method:"POST",dataType:"json",success:function(t){if(0==t.code){n.info.comment.list[e].is_like?(n.info.comment.list[e].is_like=!1,n.info.comment.list[e].like_count-=1):(n.info.comment.list[e].is_like=!0,n.info.comment.list[e].like_count+=1);var i=n.info.comment.list[e].is_like?"点赞成功":"已取消点赞";n.$alert(i,"success")}else n.$alert(t.msg,"warning")}})},favorite:function(){var t=this;this.$app.request({url:this.$api.article.favorite,data:{article_id:this.id},method:"POST",dataType:"json",success:function(e){if(console.log("res"),0==e.code){t.info.is_favorite=!t.info.is_favorite;var n=t.info.is_favorite?"收藏成功":"已取消收藏";t.$alert(n)}else t.$alert(e.msg)}})},initAddComment:function(t){var e=this;this.showAddComment=t,this.replyCommentId>0&&(this.replyCommentId=0,this.replyNickname=""),setTimeout((function(){e.addCommentFocus=t}),200)},addCommentOrReply:function(){""!=this.commentContent?this.replyCommentId>0?this.addReply():this.addComment():this.$alert("评论内容不能为空")},addComment:function(){var e=this;this.$app.request({url:this.$api.article.addComment,data:{article_id:this.id,content:this.commentContent,page_size:this.page_size},method:"POST",dataType:"json",success:function(n){0==n.code?(e.info.comment=n.data,t.setNavigationBarTitle({title:"全部评论("+n.data.count+")"}),e.showAddComment=!1,e.commentContent="",e.$alert("评论成功")):e.$alert(n.msg)}})},initAddReply:function(t,e){this.initAddComment(!0),this.replyCommentId=t,this.replyNickname=e},addReply:function(){var t=this;""!=this.commentContent?this.$app.request({url:this.$api.article.addReply,data:{comment_id:this.replyCommentId,content:this.commentContent,page_size:this.page_size},method:"POST",dataType:"json",success:function(e){0==e.code?(t.info.comment=e.data,t.showAddComment=!1,t.replyCommentId=0,t.replyNickname="",t.commentContent="",t.$alert("评论成功")):t.$alert(e.msg)}}):this.$alert("回复内容不能为空")}}};e.default=s}).call(this,n("543d")["default"])},9575:function(t,e,n){"use strict";n.r(e);var i=n("8db8"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},a263:function(t,e,n){"use strict";n.r(e);var i=n("5978"),o=n("9575");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("883d");var s,c=n("f0c5"),d=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"72f887b3",null,!1,i["a"],s);e["default"]=d.exports},ae0c:function(t,e,n){},dc46:function(t,e,n){"use strict";(function(t){n("4ebb");i(n("66fd"));var e=i(n("a263"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])}},[["dc46","common/runtime","common/vendor"]]]);