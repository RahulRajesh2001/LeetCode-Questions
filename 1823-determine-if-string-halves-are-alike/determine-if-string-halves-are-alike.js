/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
     let x=0;
  let y=0;
  for(let i=0;i<s.length/2;i++){
      if('a'==s[i] || 'A'==s[i]){
        x++;
      }else if('e'==s[i] || 'E'==s[i]){
        x++;
      }else if('i'==s[i] || 'I'==s[i]){
        x++;
      }else if('o'==s[i] || 'O'==s[i]){
        x++;
      }else if('u'==s[i] || 'U'==s[i]){
        x++;
      }
  }
  for(let i=s.length/2;i<s.length;i++){
     if('a'==s[i] || 'A'==s[i]){
        y++;
      }else if('e'==s[i] || 'E'==s[i]){
        y++;
      }else if('i'==s[i] || 'I'==s[i]){
        y++;
      }else if('o'==s[i] || 'O'==s[i]){
        y++;
      }else if('u'==s[i] || 'U'==s[i]){
        y++;
      }
  }

  
  if(y==x){
    return true;
  }else{
    return false;
  }
}