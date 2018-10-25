export const addMatrix = (A, B) => {
  // TO IMPLEMENT IN ANOTHER PR
    if(A instanceof Array == false || B instanceof Array == false)
      {
        throw('Please pass Array as parameters');
      }
      if(A.length != B.length)
      {
        throw('Please enter arrays of same length');
      }
      else
      {
        if(A[0] instanceof Array)
        {
            var result = [];
            for(var k = 0; k < A.length; k++)
            {
                result.push([]);
            }
            for(var i = 0; i < A.length; i++)
            {
                if(A[i] instanceof Array == false || B[i] instanceof Array == false)
                {
                    throw('Please enter regular matrix');
                }
                else
                {
                    for(var j = 0; j< A[i].length; j++)
                    {
                        result[i][j] = A[i][j] + B[i][j];
                    }
                }
            }
        }
        else{
            var result = [];
            for(var i = 0; i < A.length; i++)
            {
                result[i] = A[i] + B[i];
            }
        }
    }
return result;
};
