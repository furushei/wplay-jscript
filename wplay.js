import System;
import System.IO;
import System.Media;
import Microsoft.JScript;

var args = Environment.GetCommandLineArgs();

if (args.length < 2) {
  Console.WriteLine("ファイル名は必須です");
  Environment.Exit(1);
}

var fileName = args[1];
var player = new System.Media.SoundPlayer();

player.SoundLocation = fileName;
try {
  player.Load();
  player.PlaySync();
} catch (e) {
  var ex = Throw.JScriptThrow(e);
  Console.WriteLine(ex);
  Environment.Exit(1);
}
