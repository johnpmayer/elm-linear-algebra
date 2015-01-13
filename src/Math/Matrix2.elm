module Math.Matrix2 where

{-| A high performance linear algebra library using native JS arrays. Geared
towards 3D graphics and use with `Graphics.WebGL`. All vectors are immutable.

This library uses the convention that the prefix `make` is creating a new
array, whereas without the prefix, you are applying some transform to an
existing matrix.

# Create

@docs identity

# Operations

@docs inverse, mul, add, sub, transpose

# Create Transformations

@docs makeRotate

-}

import Native.Math.Matrix2
import Math.Vector2 (Vec2)

type Mat2 = Mat2

{-| A matrix with all 0s, except 1s on the diagonal.
-}
identity : Mat2
identity = Native.Math.Matrix2.m2x2identity

{-| Computes the tranpose of a given matrix.
-}
transpose : Mat2 -> Mat2
transpose = Native.Math.Matrix2.m2x2transpose

{-| Computes the inverse of a given matrix, assuming that the matrix is
invertible.
-}
inverse : Mat2 -> Mat2
inverse = Native.Math.Matrix2.m2x2inverse

{-| Matrix multiplication: a * b -}
mul : Mat2 -> Mat2 -> Mat2
mul = Native.Math.Matrix2.m2x2mul

{-| Matrix addition : a + b -}
add : Mat2 -> Mat2 -> Mat2
add = Native.Math.Matrix2.m2x2add

{-| Matrix subtraction : a - b -}
sub : Mat2 -> Mat2 -> Mat2
sub = Native.Math.Matrix2.m2x2sub

{-| Computes the determinant of a given matrix.
-}
determinant : Mat2 -> Float
determinant = Native.Math.Matrix2.m2x2determinant

{-| Creates a rotation matrix in radians about the origin.
-}
makeRotate : Float -> Mat2
makeRotate = Native.Math.Matrix2.m2x2makeRotate

{-| Creates a matrix from two Vec2's representing
the rows of the matrix.
-}
fromRows : Vec2 -> Vec2 -> Mat2
fromRows = Native.Math.Matrix2.m2x2fromRows


{-| Creates a matrix from two Vec2's representing
the columns of the matrix.
-}
fromColumns : Vec2 -> Vec2 -> Mat2
fromColumns = Native.Math.Matrix2.m2x2fromColumns

{-| Converts a 2x2 matrix to a string.
Useful for printing.
-}
toString : Mat2 -> String
toString = Native.Math.Matrix2.m2x2toString
