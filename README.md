# SQUID - Simple, Quick, Interactive Development

## Description:
 Squid is a lightweight library for rapid development of interactive web experiences.

  Squid utilizes the HTML5 canvas element and provides base objects and common helper functions
to speed up development of custom HTML5 animations, games, and visual effects.

## Background:
  I started developing with the canvas element in an effort to learn about game development.
Using HTML5 meant I could develop games and create interactive content in my favorite language
and instantly share my creations with friends and family through my website.

  After many experiments and a few attempts at larger projects, I found myself rewriting much of the
same code over and over, albeit with slightly different implementations.  While I certainly rewrote
many of the same functions and architecture from scratch, a lot of code was copied and pasted from
previous projects, and then heavily altered to fit the particular project.  I realized, as any
half-assed programmer would, that I needed a clean, generic solution that I could use over and over 
as a base these projects.

  There are plenty of HTML5 libraries and frameworks already built, tested, and used by many
with great success.  Some of these projects have large teams, are well-funded, and offer much more
functionality than I could ever dream to add to Squid.  For anyone looking for a full, commercial-
grade solution for interactive development on the web, I'd encourage them to find those frameworks
and libraries with a quick Google search.  Squid is a personal project of mine that I share openly
for anyone interested.  It's very simple, lightweight, and provides only basic functionality in an
attempt to minimize imposing limits on how it's used.

### These are my main goals in developing Squid:

1.) Enable rapid development of interactive web content by providing a basic framework for
an update and render cycle, resource management, input detection, and entity system.
2.) Minimize time spent on bootstrapping with simple constructor functions and a lightweight,
single-file include.
3.) Allow freedom in architecture design by sticking with traditional JavaScript prototypes.


## What's included?

### SQUID
- All of the library's functions and classes are namespaced under SQUID to prevent naming collisions
in large projects.
- SQUID itself contains a variety of helper functions and constants that I've found myself including
in various projects.

### SQUID.Squid
- Main container class for the update and render cycle, entity manager, initialization, and start/pause
functions.  All Squid projects start with creating an instance of Squid: var sqd = new SQUID.Squid();

- The constructor can optionally be passed a canvas object, width, and height.  If no canvas is assigned
by initialization time, a new canvas object will be created and appended to the document body.

### SQUID.Entity
- Basic entity class.  All Squid entities must have a position (entity.x entity.y), size (entity.w entity.h),
and update and render functions.  Using the Entity constructor is not mandated as long as custom entities
have these four basic properties.

- Entity objects created with SQUID.Entity have a default render function that renders a provided image or
sprite according to the object's position and size values.  The default update function is empty.
### SQUID.Animation
- Animation class integrated with Entity class.  Declare animations with the resource URL, starting frame
coordinate, frame size, and number of frames.  Declare Entity.animation = yourAnim and Entity will render the
animation by default if no explicit render function is declared for the entity.
	
### SQUID.Layer
- Layers are a container class used for managing entities.  The main Squid object contains an array of layers
(Squid.layers) that are updated and rendered in order.  At Squid construction, a base layer is created for 
convenience.  Adding entities directly to a Squid object adds them to the base layer.

### SQUID.Resources
- Resource manager for dynamic loading of image resources.
