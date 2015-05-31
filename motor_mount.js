// http://openjscad.org/
function main() {
   return rotate([180,0,0], 
   union(
      union(
  cube({size: [10,51,1], center: true}).translate([0,0,5]),
   cube({size: [10,1,1], center: true}).translate([0,25,4]),
   cube({size: [10,40,1], center: true}).translate([0,0,4]),
   cube({size: [10,1,1], center: true}).translate([0,-25,4])

      ),
      cube({size: [1,20,5], center: true}).translate([0,-10,2.5]),
      cube({size: [6,5,1], center: true}).translate([0,-17.5,0]),
      rotate([90,0,0],
        cylinder({start: [0,0,0], end: [0,0,20], r1: 2.1, r2: 2.1, fn: 50})
      )
   )
   ).translate([0,0,5.5]).scale(1);
}
