Elm.Native.Math = Elm.Native.Math || {};
Elm.Native.Math.Matrix2 = {};
Elm.Native.Math.Matrix2.make = function(elm){

  elm.Native = elm.Native || {};
  elm.Native.Math = elm.Native.Math || {};
  elm.Native.Math.Matrix2 = elm.Native.Math.Matrix2 || {};
  if (elm.Native.Math.Matrix2.values) return elm.Native.Math.Matrix2.values;

  var MJS_FLOAT_ARRAY_TYPE = Float32Array;

  var M2x2 = {};

  M2x2._temp1 = new MJS_FLOAT_ARRAY_TYPE(4);
  M2x2._temp2 = new MJS_FLOAT_ARRAY_TYPE(4);

  if (MJS_FLOAT_ARRAY_TYPE == Array) {

    M2x2.I = [1.0, 0.0,
              0.0, 1.0];

    M2x2.$ = function M2x2_$(m00, m01,
                             m02, m03){

      return [m00, m01,
              m02, m03];
    };

  } else {

    M2x2.I = new MJS_FLOAT_ARRAY_TYPE([1.0, 0.0,
                                       0.0, 1.0]);

    /*
     * Function: M2x2.$
     *
     * Creates a new 2x2 matrix with the given values.
     *
     * Parameters:
     *
     *    m00,m01,m02,m03 - the 4 elements of the new matrix.
     *
     * Returns :
     *
     *    A new matrix filled with the given argument values.
     */

    M2x2.$ = function M2x2_$(m00, m01,
                             m02, m03){

      return new MJS_FLOAT_ARRAY_TYPE([m00, m01,
                                       m02, m03]);
    };

  }

  M2x2.identity = M2x2.I;


  /*
   * Function M2x2.fromRows
   *
   * Creates a matrix from two 2-d vectors representing the rows
   * of the created matrix.
   *
   * Parameters:
   *
   *    row0 - the first or top row of the matrix
   *    row1 - the second or bottom row of the matrix
   *    r - optional 2x2 matrix to store the result in
   *
   * Returns:
   *
   *    If r is specified, returns r after performing the operation.
   *    Otherwise, returns a new 2x2 matrix with the result.
   */
  M2x2.fromRows = function M2x2_fromRows(row0, row1, r){
    
    if (r == undefined){
      r = new MJS_FLOAT_ARRAY_TYPE(4);
    }

    r[0] = row0[0];
    r[1] = row0[1];
    r[2] = row1[0];
    r[3] = row1[1];

    return r;
  };


  /*
   * Function M2x2.fromColumns
   *
   * Creates a matrix from two 2-d vectors representing the columns
   * of the created matrix.
   *
   * Parameters:
   *
   *    column0 - the first or left column of the matrix
   *    column1 - the second or right column of the matrix
   *    r - optional 2x2 matrix to store the result in
   *
   * Returns:
   *
   *    If r is specified, returns r after performing the operation.
   *    Otherwise, returns a new 2x2 matrix with the result.
   */
  M2x2.fromColumns = function M2x2_fromColumns(column0, column1, r){

    if (r == undefined){
      r = new MJS_FLOAT_ARRAY_TYPE(4);
    }

    r[0] = column0[0];
    r[1] = column1[0];
    r[2] = column0[1];
    r[3] = column1[1];

    return r;
  };

  /*
   * Function: M2x2.transpose
   *
   * Computes the transpose of the given matrix m.
   *
   * Parameters:
   *
   *    m - the matrix
   *    r - optional 2x2 matrix to store the result in
   *
   * Returns:
   *
   *    If r is specified, returns r after performing the operation.
   *    Otherwise, returns a new 2x2 matrix with the result.
   */
  M2x2.transpose = function M2x2_transpose(m, r){

    if (r == undefined){
      r = new MJS_FLOAT_ARRAY_TYPE(4);
    }

    r[0] = m[0];
    r[1] = m[2];
    r[2] = m[1];
    r[3] = m[3];

    return r;
  };

  /*
   * Function: M2x2.inverse
   *
   * Computes the inverse of the given matrix m, assuming that
   * the matrix is invertible.
   *
   * Parameters:
   *
   *    m - the matrix
   *    r - optional 2x2 matrix to store the result in
   *
   * Returns:
   *
   *    If r is specified, returns r after performing the operation.
   *    Otherwise, returns a new 2x2 matrix with the result.
   */
  M2x2.inverse = function M2x2_inverse(m, r){

    if (r == undefined){
      r = new MJS_FLOAT_ARRAY_TYPE(4);
    }

    var det = m[0] * m[3] - m[1] * m[2];

    r[0] = m[3] / det;
    r[1] = -m[1] / det;
    r[2] = -m[2] / det;
    r[3] = m[0] / det;

    return r;
  };

   /*
    * Function: M2x2.mul
    *
    * Performs r = a * b
    *
    * Parameters:
    *
    *   a - the first matrix operand
    *   b - the second matrix operand
    *   r - optional 2x2 matrix to store the result in
    *
    * Returns:
    *
    *   If r is specified, returns r after performing the operation.
    *   Otherwise, returns a new 2x2 matrix with the result.
    */
  M2x2.mul = function M2x2_mul(a,b,r){

    if (r == undefined){
      r = new MJS_FLOAT_ARRAY_TYPE(4);
    }

    r[0] = a[0] * b[0] + a[1] * b[2];
    r[1] = a[0] * b[1] + a[1] * b[3];
    r[2] = a[2] * b[0] + a[3] * b[2];
    r[3] = a[2] * b[1] + a[3] * b[3];

    return r;
  };

    /*
    * Function: M2x2.add
    *
    * Performs r = a + b
    *
    * Parameters:
    *
    *   a - the first matrix operand
    *   b - the second matrix operand
    *   r - optional 2x2 matrix to store the result in
    *
    * Returns:
    *
    *   If r is specified, returns r after performing the operation.
    *   Otherwise, returns a new 2x2 matrix with the result.
    */
  M2x2.add = function M2x2_add(a, b, r){

    if (r == undefined){
      r = new MJS_FLOAT_ARRAY_TYPE(4);
    }

    r[0] = a[0] + b[0];
    r[1] = a[1] + b[1];
    r[2] = a[2] + b[2];
    r[3] = a[3] + b[3];

    return r;
  };

    /*
    * Function: M2x2.sub
    *
    * Performs r = a - b
    *
    * Parameters:
    *
    *   a - the first matrix operand
    *   b - the second matrix operand
    *   r - optional 2x2 matrix to store the result in
    *
    * Returns:
    *
    *   If r is specified, returns r after performing the operation.
    *   Otherwise, returns a new 2x2 matrix with the result.
    */
  M2x2.sub = function M2x2_sub(a,b,r){

    if (r == undefined){
      r = new MJS_FLOAT_ARRAY_TYPE(4);
    }

    r[0] = a[0] - b[0];
    r[1] = a[1] - b[1];
    r[2] = a[2] - b[2];
    r[3] = a[3] - b[3];

    return r;
  };

  /*
   * Function: M2x2.determinant
   *
   * Perform r = det m
   *
   * Parameters:
   *
   *   m - the matrix
   *
   * Returns:
   *
   *   The determinant of the given matrix.
   */
  M2x2.determinant = function M2x2_determinant(m){
    return m[0] * m[3] - m[1] * m[2];
  };

  /*
   * Function M2x2.makeRotate
   *
   * Creates a rotation matrix by angle radians about the origin.
   *
   * Parameters:
   *
   *   angle - the angle of rotation, in radians
   *   r - optional 2x2 matrix to store the result in
   *
   *   If r is specified, returns r after creating the matrix.
   *   Otherwise, returns a new 2x2 matrix with the result.
   */
  M2x2.makeRotate = function M2x2_makeRotate(angle, r){

    if (r == undefined){
      r = new MJS_FLOAT_ARRAY_TYPE(4);
    }

    r[0] = Math.cos(angle);
    r[1] = -Math.sin(angle);
    r[2] = -r[1];
    r[3] = r[0];

    return r;
  };


  /*
   * Function M2x2.toString
   *
   * Converts a 2x2 matrix to a string (useful for printing)
   *
   * Parameters :
   *
   *    m - the matrix
   *
   * Returns :
   *
   *    String representation of the input matrix
   */
  M2x2.toString = function M2x2_toString(m){
    var row0 = "[" + m[0].toString() + ", " + m[1].toString() + "]";
    var row1 = "[" + m[2].toString() + ", " + m[3].toString() + "]";

    return "Mat2 [" + row0 + ", " + row1 + "]";
  };

  return {
    m2x2identity: M2x2.identity,
    m2x2fromRows: F2(M2x2.fromRows),
    m2x2fromColumns: F2(M2x2.fromColumns),
    m2x2transpose: M2x2.transpose,
    m2x2inverse : M2x2.inverse,
    m2x2mul: F2(M2x2.mul),
    m2x2add: F2(M2x2.add),
    m2x2sub: F2(M2x2.sub),
    m2x2determinant: M2x2.determinant,
    m2x2makeRotate: M2x2.makeRotate,
    m2x2toString : M2x2.toString
  };

};
